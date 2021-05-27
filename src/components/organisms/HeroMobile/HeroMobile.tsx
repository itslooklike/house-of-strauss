import cx from 'classnames'
import React from 'react'
import { ButtonGhost, LogoBrand } from '~/components/atoms'
import { LinkPopup } from '~/utils/LinkPopup'
import type { TRoute } from '~/utils/config'
import css from './HeroMobile.module.scss'

type TProps = {
  logo: React.ComponentProps<typeof LogoBrand>['logo']
  text: string
  link: string
  route: TRoute
  type: 'var1' | 'var2' | 'var3'
}

export const HeroMobile = (props: TProps) => {
  const { logo, text, link, route, type } = props

  return (
    <div className={cx(css.root, css[type])}>
      <div className={css.content}>
        <div>
          <LogoBrand logo={logo} />
        </div>
        <div className={css.text}>{text}</div>
        <LinkPopup href={route.url} withPopup={route.withPopup}>
          <a>
            <ButtonGhost>{link}</ButtonGhost>
          </a>
        </LinkPopup>
      </div>
    </div>
  )
}
