import { useState } from 'react'
import cx from 'classnames'
import { Socials, Logo } from '~/components/atoms'
import { HeroTextSlot } from '~/components/molecules'
import css from './Hero.module.scss'

export const Hero = () => {
  const [type, setType] = useState<'var1' | 'var2' | 'var3'>('var1')

  const handleHover1 = () => setType('var1')
  const handleHover2 = () => setType('var2')
  const handleHover3 = () => setType('var3')

  return (
    <div className={cx(css.hero, css[type])}>
      <div className={css.inner}>
        <div className={css.header}>
          <div className={css.socialWrap}>
            <Socials />
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
        </div>

        <div className={css.contentWrap}>
          <HeroTextSlot
            onMouseEnter={handleHover1}
            title="Museum"
            text="Eintauchen in die Strauss Dynastie"
            link="More"
          />
          <HeroTextSlot
            onMouseEnter={handleHover2}
            title="Concerts"
            text="A musical evening in Vienna"
            link="Coming soon"
          />
          <HeroTextSlot
            onMouseEnter={handleHover3}
            title="Restaurant"
            text="A musical evening in Vienna"
            link="Reservation"
          />
        </div>
      </div>
    </div>
  )
}
