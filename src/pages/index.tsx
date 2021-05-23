import type { NextPage } from 'next'
import { CardSmall, CardLarge, CardMedium } from '~/components/atoms'
import { Footer, InnerMap } from '~/components/molecules'
import { Hero } from '~/components/organisms'
import css from './index.module.scss'

const Home: NextPage = () => (
  <div>
    <Hero />
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
