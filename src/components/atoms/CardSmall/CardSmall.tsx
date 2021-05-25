/* eslint-disable react/destructuring-assignment */

import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import AnimateHeight from 'react-animate-height'
import { IconArrow } from '~/icons'
import css from './CardSmall.module.scss'

type TLink = {
  linkHref: string
}

type TButton = {
  onClick: VoidFunction
}

type TProps = {
  title: string
  description: string
  type?: 'music' | 'statue'
  linkText: string
} & (TLink | TButton)

export const CardSmall = (props: TProps) => {
  const { type, title, description, linkText } = props

  const [height, setHeight] = useState<0 | 'auto'>(0)

  const handleEnter = () => setHeight('auto')

  const handleLeave = () => setHeight(0)

  return (
    <div
      className={cx(css.root, type && css[type])}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <AnimateHeight height={height}>
          <div className={css.description}>{description}</div>
        </AnimateHeight>

        {'onClick' in props ? (
          <div className={css.link} onClick={props.onClick}>
            <span className={css.iconWrap}>
              <IconArrow height={12} />
            </span>
            {linkText}
          </div>
        ) : (
          <Link href={props.linkHref}>
            <a className={css.link}>
              <span className={css.iconWrap}>
                <IconArrow height={12} />
              </span>
              {linkText}
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
