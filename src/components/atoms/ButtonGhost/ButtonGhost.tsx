/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import css from './ButtonGhost.module.scss'

export const ButtonGhost: React.FC<React.ComponentProps<'button'>> = (props) => {
  const { children, ...rest } = props

  return (
    <button type="button" className={css.root} {...rest}>
      {children}
    </button>
  )
}
