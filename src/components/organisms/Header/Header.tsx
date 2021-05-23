import { useState } from 'react'
import { Socials, Logo } from '~/components/atoms'
import { MenuMobile } from '~/components/molecules'
import { IconMenu } from '~/icons'
import css from './Header.module.scss'

export const Header = () => {
  const [show, setShow] = useState(false)

  const handleOpen = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <div className={css.header}>
      {show && (
        <div className={css.mobileMenu}>
          <MenuMobile />
        </div>
      )}
      <div className={css.socialWrap}>
        <Socials />
      </div>
      <div className={css.menuIconWrap} onClick={handleOpen}>
        <IconMenu />
      </div>
      <div className={css.logoWrap}>
        <Logo />
      </div>
      <nav>
        <ul className={css.navList}>
          <li className={css.navListItem}>Visit</li>
          <li className={css.navListItem}>More</li>
          <li className={css.navListItem}>News</li>
          <li className={css.navListItem}>Tickets</li>
        </ul>
      </nav>
      <div className={css.langBlock}>En *</div>
    </div>
  )
}
