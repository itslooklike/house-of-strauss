import { useEffect } from 'react'
import { ClientOnlyPortal } from '~/utils/ClientOnlyPortal'
import css from './Modal.module.scss'

const globalClass = 'modal-is-open'

export const Modal: React.FC = ({ children }) => {
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
        <div>{children}</div>
      </div>
    </ClientOnlyPortal>
  )
}
