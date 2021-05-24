import { useState } from 'react'
import cx from 'classnames'
import AnimateHeight from 'react-animate-height'
import css from './CardSmall.module.scss'

type TProps = {
  title: string
  link: string
  description: string
  type?: 'music' | 'statue'
}

export const CardSmall = ({ type, title, link, description }: TProps) => {
  const [height, setHeight] = useState<number | 'auto'>(0)

  const handleToggle = () => setHeight(height === 0 ? 'auto' : 0)

  return (
    <div
      className={cx(css.root, type && css[type])}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <AnimateHeight height={height}>
          <div className={css.description}>{description}</div>
        </AnimateHeight>
        <div className={css.link}>{link}</div>
      </div>
    </div>
  )
}
