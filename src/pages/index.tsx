import type { NextPage } from 'next'
import { CardSmall, CardLarge, CardMedium } from '~/components/atoms'
import { Footer, InnerMap, Header } from '~/components/molecules'
import { Hero, HeroMobile } from '~/components/organisms'
import css from './index.module.scss'

const Home: NextPage = () => (
  <div>
    <Header />
    <div className={css.heroWrapDesktop}>
      <Hero />
    </div>
    <div className={css.heroWrapMobile}>
      <HeroMobile
        type="var1"
        title="Museum"
        text="Eintauchen in die Strauss Dynastie"
        link="More"
      />
      <HeroMobile
        type="var2"
        title="Concerts"
        text="A musical evening in Vienna"
        link="Coming soon"
      />
      <HeroMobile
        type="var3"
        title="Restaurant"
        text="A musical evening in Vienna"
        link="Reservation"
      />
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
