import type { NextPage } from 'next'
import { Logo, CardSmall, Socials, CardLarge, CardMedium } from '~/components/atoms'
import { Footer, InnerMap, HeroTextSlot } from '~/components/molecules'
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
          <HeroTextSlot title="Museum" text="Eintauchen in die Strauss Dynastie" link="More" />
          <HeroTextSlot title="Concerts" text="A musical evening in Vienna" link="Coming soon" />
          <HeroTextSlot title="Restaurant" text="A musical evening in Vienna" link="Reservation" />
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
        <CardSmall title="Delicacies and Souvenirs" link="Shop" />
        <CardSmall type="music" title="Musical Masterclasses" link="More" />
        <CardSmall type="statue" title="Strauss Research" link="More" />
      </div>
      <div className={css.mapContainer}>
        <CardMedium />
        <InnerMap />
      </div>
    </div>

    <Footer />
  </div>
)

export default Home
