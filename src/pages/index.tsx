import type { NextPage } from 'next'
import { CardSmall, CardLarge, CardMedium } from '~/components/atoms'
import { InnerMap } from '~/components/molecules'
import { Hero, HeroMobile, Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './index.module.scss'

const Home: NextPage = () => (
  <LWithFooter>
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
        <CardSmall
          title="Delicacies and Souvenirs"
          link="Shop"
          description="Our shop offers specially made Viennese and „House of Strauss“ souvenirs along with culinary delicacies."
        />
        <CardSmall
          type="music"
          title="Musical Masterclasses"
          link="More"
          description="Young musicians from all over the world work here with internationally recognised masters to improve their skills."
        />
        <CardSmall
          type="statue"
          title="Strauss Research"
          link="More"
          description="The Viennese Institut for Strauss-Research (WISF) is a sponsoring association for scientific research projects relating to the Strauss family and their contemporaries, located in Casino Zögernitz."
        />
      </div>
      <div className={css.mapContainer}>
        <CardMedium />
        <InnerMap />
      </div>
    </div>
  </LWithFooter>
)

export default Home
