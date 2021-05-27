import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { Socials, Logo, Region } from '~/components/atoms'
import { MenuMobile } from '~/components/molecules'
import { IconMenu } from '~/icons'
import { HeaderNav } from './HeaderNav'
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

    return () => {
      observer.disconnect()
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
            <HeaderNav />
          </nav>
          <div className={css.langBlock}>
            <Region />
          </div>
        </div>
      </div>
    </>
  )
}
