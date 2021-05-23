import React from 'react'
import css from './Button.module.scss'

export const Button: React.FC = (props) => {
  const { children, ...rest } = props

  return (
    <button type="button" className={css.root} {...rest}>
      {children}
    </button>
  )
}
