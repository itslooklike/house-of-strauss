import { Socials, Logo } from '~/components/atoms'
import { IconMenu } from '~/icons'
import css from './Header.module.scss'

export const Header = () => (
  <div className={css.header}>
    <div className={css.socialWrap}>
      <Socials />
    </div>
    <div className={css.menuIconWrap}>
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
