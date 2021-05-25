/* eslint-disable react/jsx-props-no-spreading */

import cx from 'classnames'
import css from './Input.module.scss'

type TProps = {
  mobileLight?: boolean
}

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & TProps) => {
  const { className, mobileLight, ...rest } = props

  return (
    <div className={cx(css.inputWrap, mobileLight && css.mobileLight)}>
      <input className={cx(css.input, className)} {...rest} />
    </div>
  )
}
