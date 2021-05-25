import cx from 'classnames'
import css from './ButtonGhost.module.scss'

type TProps = {
  onClick: VoidFunction
}

export const ButtonGhost: React.FC<TProps> = (props) => {
  const { children, ...rest } = props

  return (
    <button type="button" className={cx(css.root)} {...rest}>
      {children}
    </button>
  )
}
