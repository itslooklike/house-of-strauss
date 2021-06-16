import { useEffect } from 'react'
import { ClientOnlyPortal } from './ClientOnlyPortal'

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

export const ModalWrap: React.FC = ({ children }) => {
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

  return <ClientOnlyPortal>{children}</ClientOnlyPortal>
}
