import cx from 'classnames'
import css from './PageHero.module.scss'

type TProps = {
  theme?: 'mint' | 'light-purple'
}

export const PageHero: React.FC<TProps> = ({ children, theme }) => (
  <div className={cx(css.root, theme && css[theme])}>{children}</div>
)
