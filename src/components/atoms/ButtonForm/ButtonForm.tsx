/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames'
import css from './ButtonForm.module.scss'

export const ButtonForm: React.FC<React.ComponentProps<'button'>> = (props) => {
  const { children, className, ...rest } = props

  return (
    <button type="button" className={cx(css.buttonForm, className)} {...rest}>
      {children}
    </button>
  )
}
