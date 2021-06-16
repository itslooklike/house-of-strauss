import cx from 'classnames'
import { ReactNode } from 'react'
import css from './PageContent.module.scss'

type TProps = {
  variant?: 'shop' | 'no-paddings'
  size?: 'large'
  title?: ReactNode
}

export const PageContent: React.FC<TProps> = ({ children, variant, size, title }) => (
  <div className={cx(css.root, variant && css[variant], size && css[size])}>
    <div className={css.rootInner}>
      <div className={cx(css.content)}>
        <div className={css.contentInner}>
          {title && <h2 className={css.title}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  </div>
)
