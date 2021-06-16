import { useState } from 'react'
import cx from 'classnames'
import css from './Tabs.module.scss'

type TData = {
  title: string
  disabled?: boolean
  content: JSX.Element
}

type TProps = {
  tabs: TData[]
  defaultActive?: number
}

export const Tabs = (props: TProps) => {
  const { tabs, defaultActive } = props
  const [active, setActive] = useState(defaultActive || 0)

  return (
    <div className={css.root}>
      <div className={css.tabsTitles}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cx(
              css.tabTitle,
              index === active && css.active,
              tab.disabled && css.disabled
            )}
            onClick={() => !tab.disabled && setActive(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  )
}
