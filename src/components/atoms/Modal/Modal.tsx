import { useEffect } from 'react'
import { ClientOnlyPortal } from '~/utils/ClientOnlyPortal'
import { IconCross } from '~/icons'
import css from './Modal.module.scss'

const globalClass = 'modal-is-open'

type TProps = {
  onClose: VoidFunction
}

export const Modal: React.FC<TProps> = ({ children, onClose }) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add(globalClass)

    return () => {
      document.querySelector('body')?.classList.remove(globalClass)
    }
  }, [])

  return (
    <ClientOnlyPortal>
      <div className={css.root}>
        <div className={css.backdrop} />
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