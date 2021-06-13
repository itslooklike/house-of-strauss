import cx from 'classnames'
import css from './TextPageTitle.module.scss'

type TProps = {
  align?: 'center'
}

export const TextPageTitle: React.FC<TProps> = ({ children, align }) => (
  <h1 className={cx(css.root, align && css[align])}>{children}</h1>
)
