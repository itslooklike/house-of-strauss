import cx from 'classnames'
import React from 'react'
import Link from 'next/link'
import { ButtonGhost, LogoBrand } from '~/components/atoms'
import css from './HeroMobile.module.scss'

type TProps = {
  logo: React.ComponentProps<typeof LogoBrand>['logo']
  text: string
  link: string
  href: string
  type: 'var1' | 'var2' | 'var3'
}

export const HeroMobile = (props: TProps) => {
  const { logo, text, link, href, type } = props

  return (
    <div className={cx(css.root, css[type])}>
      <div className={css.content}>
        <div>
          <LogoBrand logo={logo} />
        </div>
        <div className={css.text}>{text}</div>
        <Link href={href}>
          <a>
            <ButtonGhost>{link}</ButtonGhost>
          </a>
        </Link>
      </div>
    </div>
  )
}
