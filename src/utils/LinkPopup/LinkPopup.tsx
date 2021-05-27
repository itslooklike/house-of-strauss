import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type TProps = {
  href: string
  withPopup?: boolean
}

export const LinkPopup: React.FC<TProps> = ({ children, href, withPopup, ...rest }) => {
  const router = useRouter()

  if (withPopup) {
    const link = router.pathname + href

    const onClick = (evt: React.SyntheticEvent) => {
      evt.preventDefault()
      router.push(link, undefined, { shallow: true })
    }

    const childProps = {
      href: link,
      onClick,
    }

    // @ts-ignore
    return React.cloneElement(children, childProps)
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
