import cx from 'classnames'
import css from './CardSmall.module.scss'

type TProps = {
  title: string
  link: string
  description: string
  type?: 'music' | 'statue'
}

export const CardSmall = ({ type, title, link, description }: TProps) => (
  <div className={cx(css.root, type && css[type])}>
    <div className={css.content}>
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
      <div className={css.link}>{link}</div>
    </div>
  </div>
)
