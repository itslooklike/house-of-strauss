/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames'
import css from './ButtonForm.module.scss'

type TProps = {
  mobileLight?: boolean
}

export const ButtonForm: React.FC<React.ComponentProps<'button'> & TProps> = (props) => {
  const { children, className, mobileLight, ...rest } = props

  return (
    <button
      type="button"
      className={cx(css.buttonForm, mobileLight && css.mobileLight, className)}
      {...rest}
    >
      {children}
    </button>
  )
}
