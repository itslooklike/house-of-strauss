import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import AnimateHeight from 'react-animate-height'
import { IconArrow } from '~/icons'
import css from './CardSmall.module.scss'

type TProps = {
  title: string
  description: string
  type?: 'music' | 'statue'
  linkText: string
  href: string
}

export const CardSmall = (props: TProps) => {
  const { type, title, description, linkText, href } = props

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
        <AnimateHeight height={height} animateOpacity>
          <div className={css.description}>{description}</div>
        </AnimateHeight>
        <Link href={href}>
          <a className={css.link}>
            <IconArrow height={12} />
            &nbsp;{linkText}
          </a>
        </Link>
      </div>
    </div>
  )
}
