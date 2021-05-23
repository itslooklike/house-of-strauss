import React from 'react'
import css from './ButtonGhost.module.scss'

export const ButtonGhost: React.FC = (props) => {
  const { children, ...rest } = props

  return (
    <button type="button" className={css.root} {...rest}>
      {children}
    </button>
  )
}
