import cx from 'classnames'
import Link from 'next/link'
import { LinkPopup } from '~/utils/LinkPopup'
import { DropDown } from '~/utils/DropDown'
import { menu, allRoutes } from '~/utils/config'
import css from './HeaderNav.module.scss'

const data = [
  { title: 'Visit', url: menu[0] },
  { title: 'More', url: menu[1] },
  { title: allRoutes.news.title, url: allRoutes.news.url },
  { title: allRoutes.tickets.title, url: allRoutes.tickets.url, active: true },
]

export const HeaderNav = () => (
  <ul className={css.navList}>
    {data.map((subMenu, index) => {
      if (Array.isArray(subMenu.url)) {
        return (
          <li key={index} className={css.navListItem}>
            <DropDown
              content={
                <ul className={css.innerMenuList}>
                  {subMenu.url.map((item, indexInner) => (
                    <li key={indexInner}>
                      <LinkPopup href={item.url} withPopup={item.withPopup}>
                        <a className={css.innerMenuListItem}>{item.title}</a>
                      </LinkPopup>
                    </li>
                  ))}
                </ul>
              }
            >
              <span>{subMenu.title}</span>
            </DropDown>
          </li>
        )
      }

      return (
        <li key={index} className={cx(css.navListItem, subMenu.active && css.active)}>
          <Link href={subMenu.url}>
            <a>{subMenu.title}</a>
          </Link>
        </li>
      )
    })}
  </ul>
)
