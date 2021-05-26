import Tippy from '@tippyjs/react'
import React from 'react'

type TProps = React.ComponentProps<typeof Tippy>

export const DropDown = (props: TProps) => {
  const { content, children } = props

  return (
    <Tippy interactive theme="museum" content={content}>
      {children}
    </Tippy>
  )
}
