import type { NextPage } from 'next'
import { Logo, CardSmall, Socials, CardLarge, CardMedium } from '~/components/atoms'
import { Footer } from '~/components/malecules'
import css from './index.module.scss'

const Home: NextPage = () => (
  <div>
    <div className={css.hero}>
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
          <div className={css.textMuseum}>Museum</div>
          <div className={css.textConcerts}>Concerts</div>
          <div className={css.textRestaurant}>Restaurant</div>
        </div>
      </div>
    </div>
    <div className={css.mainBlock}>
      <div className={css.contentTitle}>
        House of Strauss offers a unique musical and culinary experience in Vienna, the Capital of
        Music
      </div>
      <CardLarge />
      <div className={css.cardsContainer}>
        <CardSmall />
        <CardSmall type="music" />
        <CardSmall type="statue" />
      </div>
      <div className={css.mapContainer}>
        <CardMedium />
      </div>
    </div>

    <Footer />
  </div>
)

export default Home
