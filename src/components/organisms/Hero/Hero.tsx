import { useState } from 'react'
import cx from 'classnames'
import Head from 'next/head'
import { HeroTextSlot } from '~/components/molecules'
import { allRoutes } from '~/utils/config'
import css from './Hero.module.scss'

export const Hero = () => {
  const [type, setType] = useState<'var1' | 'var2' | 'var3'>('var1')
  const handleHover1 = () => setType('var1')
  const handleHover2 = () => setType('var2')
  const handleHover3 = () => setType('var3')

  return (
    <>
      <Head>
        <link rel="preload" href="/images/museum-1.jpg" as="image" />
        <link rel="preload" href="/images/museum-2.jpg" as="image" />
        <link rel="preload" href="/images/museum-3.jpg" as="image" />
      </Head>
      <div className={cx(css.hero, css[type])}>
        <div className={css.inner}>
          <div className={css.contentWrap}>
            <HeroTextSlot
              onMouseEnter={handleHover1}
              logo="Museum"
              text="Eintauchen in die Strauss Dynastie"
              link="More"
              route={allRoutes.museum}
            />
            <HeroTextSlot
              onMouseEnter={handleHover2}
              logo="Concerts"
              text="A musical evening in Vienna"
              link="Reservation"
              route={allRoutes.concerts}
            />
            <HeroTextSlot
              onMouseEnter={handleHover3}
              logo="Restaurant"
              text="A musical evening in Vienna"
              link="Coming soon"
              route={allRoutes.brasserie}
            />
          </div>
        </div>
      </div>
    </>
  )
}
