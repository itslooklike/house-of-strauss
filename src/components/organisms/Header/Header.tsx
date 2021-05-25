import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { Socials, Logo } from '~/components/atoms'
import { MenuMobile } from '~/components/molecules'
import { IconMenu } from '~/icons'
import { menu, allRoutes } from '~/utils/config'
import css from './Header.module.scss'

type TProps = {
  type?: 'dark'
  mobileDark?: boolean
}

export const Header = ({ type, mobileDark }: TProps) => {
  const [show, setShow] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)

  const handleOpen = () => setShow(true)

  const handleClose = () => setShow(false)

  const node = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1) {
          setHeaderScrolled(false)
        } else {
          setHeaderScrolled(true)
        }
      })
    }, options)

    if (node.current) {
      observer.observe(node.current)
    }
  }, [])

  return (
    <>
      <div ref={node} />
      <div
        className={cx(
          css.root,
          type && css[type],
          mobileDark && css.mobileDark,
          headerScrolled && css.active
        )}
      >
        <div className={css.inner}>
          {show && (
            <div className={css.mobileMenu}>
              <MenuMobile onClick={handleClose} />
            </div>
          )}
          <div className={css.socialWrap}>
            <Socials />
          </div>
          <button type="button" className={css.menuIconWrap} onClick={handleOpen}>
            <IconMenu width={24} />
          </button>
          <div className={css.logoWrap}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <nav>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <span>Visit</span>
                <div className={css.innerMenuContainer}>
                  <ul className={css.innerMenuList}>
                    {menu[0].map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>
                          <a className={css.innerMenuListItem}>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className={css.navListItem}>
                <span>More</span>
                <div className={css.innerMenuContainer}>
                  <ul className={css.innerMenuList}>
                    {menu[1].map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>
                          <a className={css.innerMenuListItem}>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className={css.navListItem}>
                <Link href={allRoutes.news.url}>
                  <a>{allRoutes.news.title}</a>
                </Link>
              </li>
              <li className={cx(css.navListItem, css.active)}>
                <Link href={allRoutes.tickets.url}>
                  <a>{allRoutes.tickets.title}</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={css.langBlock}>En *</div>
        </div>
      </div>
    </>
  )
}
