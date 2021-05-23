import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { Socials, Logo } from '~/components/atoms'
import { MenuMobile } from '~/components/molecules'
import { IconMenu } from '~/icons'
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
            <IconMenu width={20} />
          </button>
          <div className={css.logoWrap}>
            <Logo />
          </div>
          <nav>
            <ul className={css.navList}>
              <li>
                <a href="#" className={css.navListItem}>
                  Visit
                </a>
              </li>
              <li>
                <a href="#" className={css.navListItem}>
                  More
                </a>
              </li>
              <li>
                <a href="#" className={css.navListItem}>
                  News
                </a>
              </li>
              <li>
                <a href="#" className={cx(css.navListItem, css.active)}>
                  Tickets
                </a>
              </li>
            </ul>
          </nav>
          <div className={css.langBlock}>En *</div>
        </div>
      </div>
    </>
  )
}
