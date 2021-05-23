import { useState } from 'react'
import cx from 'classnames'
import { HeroTextSlot, Header } from '~/components/molecules'
import css from './Hero.module.scss'

export const Hero = () => {
  const [type, setType] = useState<'var1' | 'var2' | 'var3'>('var1')

  const handleHover1 = () => setType('var1')
  const handleHover2 = () => setType('var2')
  const handleHover3 = () => setType('var3')

  return (
    <div className={cx(css.hero, css[type])}>
      <div className={css.inner}>
        <Header />

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
