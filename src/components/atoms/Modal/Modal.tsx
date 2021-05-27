import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { popupParam } from '~/utils/config'
import { IconCross } from '~/icons'
import { ClientOnlyPortal } from './ClientOnlyPortal'
import css from './Modal.module.scss'

type TProps = {
  onClose: VoidFunction
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

export const Modal: React.FC<TProps> = ({ children, onClose }) => {
  const router = useRouter()

  useEffect(() => {
    const node = document.querySelector('html')
    if (node) {
      node.style.paddingRight = `${getScrollbarWidth()}px`
      node.style.overflow = `hidden`
    }

    return () => {
      if (node) {
        node.style.paddingRight = ``
        node.style.overflow = ``
      }
    }
  }, [])

  // FIXME: this effect only for modals. Better to move it on another wrapper when
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newQuery = { ...router.query }

    delete newQuery[popupParam]

    return () => {
      router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true })
    }
  }, [])

  return (
    <ClientOnlyPortal>
      <div className={css.root}>
        <div className={css.backdrop} onClick={onClose} />
        <div className={css.popup}>
          <div className={css.popupClose} onClick={onClose}>
            <IconCross width="20" />
          </div>
          <div className={css.popupInner}>{children}</div>
        </div>
      </div>
    </ClientOnlyPortal>
  )
}
