import cx from 'classnames'
import css from './PageContent.module.scss'

type TProps = {
  variant?: 'shop' | 'no-paddings'
  size?: 'large'
}

export const PageContent: React.FC<TProps> = ({ children, variant, size }) => (
  <div className={cx(css.root, variant && css[variant], size && css[size])}>
    <div className={css.rootInner}>
      <div className={cx(css.content)}>
        <div className={css.contentInner}>{children}</div>
      </div>
    </div>
  </div>
)
