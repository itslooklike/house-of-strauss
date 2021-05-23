import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { Socials, Logo } from '~/components/atoms'
import { MenuMobile } from '~/components/molecules'
import { IconMenu } from '~/icons'
import { menu } from '~/utils/config'
import css from './Header.module.scss'

export const Header = () => {
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
      <div className={cx(css.root, headerScrolled && css.active)}>
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
            <Logo />
          </div>
          <nav>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <span>Visit</span>
                <div className={css.innerMenuContainer}>
                  <ul className={css.innerMenuList}>
                    {menu[0].map((item, index) => (
                      <li key={index}>
                        <a href={item.url} className={css.innerMenuListItem}>
                          {item.title}
                        </a>
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
                        <a href={item.url} className={css.innerMenuListItem}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className={css.navListItem}>News</li>
              <li className={cx(css.navListItem, css.active)}>Tickets</li>
            </ul>
          </nav>
          <div className={css.langBlock}>En *</div>
        </div>
      </div>
    </>
  )
}
