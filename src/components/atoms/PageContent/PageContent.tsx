import cx from 'classnames'
import css from './PageContent.module.scss'

type TProps = {
  variant?: 'shop'
}

export const PageContent: React.FC<TProps> = ({ children, variant }) => (
  <div className={cx(css.root, variant && css[variant])}>
    <div className={css.rootInner}>
      <div className={cx(css.content)}>
        <div className={css.contentInner}>{children}</div>
      </div>
    </div>
  </div>
)
