import cx from 'classnames'
import css from './PageHero.module.scss'

type TProps = {
  theme?: 'mint' | 'light-purple' | 'orange' | 'concerts'
  size?: 'slim'
}

export const PageHero: React.FC<TProps> = (props) => {
  const { children, theme, size } = props

  return <div className={cx(css.root, theme && css[theme], size && css[size])}>{children}</div>
}
