import { useState } from 'react'
import cx from 'classnames'
import { HeroTextSlot } from '~/components/molecules'
import { allRoutes } from '~/utils/config'
import css from './Hero.module.scss'

export const Hero = () => {
  const [type, setType] = useState<'var1' | 'var2' | 'var3'>('var1')
  const handleHover1 = () => setType('var1')
  const handleHover2 = () => setType('var2')
  const handleHover3 = () => setType('var3')

  return (
    <div className={cx(css.hero, css[type])}>
      <div className={css.inner}>
        <div className={css.contentWrap}>
          <HeroTextSlot
            onMouseEnter={handleHover1}
            logo="Museum"
            text="Eintauchen in die Strauss Dynastie"
            link="More"
            href={allRoutes.museum.url}
          />
          <HeroTextSlot
            onMouseEnter={handleHover2}
            logo="Concerts"
            text="A musical evening in Vienna"
            link="Reservation"
            href={allRoutes.concerts.url}
          />
          <HeroTextSlot
            onMouseEnter={handleHover3}
            logo="Restaurant"
            text="A musical evening in Vienna"
            link="Coming soon"
            href={allRoutes.brasserie.url}
          />
        </div>
      </div>
    </div>
  )
}
