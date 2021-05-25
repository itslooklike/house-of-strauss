/* eslint-disable react/jsx-props-no-spreading */

import cx from 'classnames'
import css from './Input.module.scss'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props

  return (
    <div className={css.inputWrap}>
      <input className={cx(css.input, className)} {...rest} />
    </div>
  )
}
