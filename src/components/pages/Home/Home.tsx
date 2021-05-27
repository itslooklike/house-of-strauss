import { useTranslation } from 'react-i18next'
import { CardSmall, CardLarge, CardMedium } from '~/components/atoms'
import { InnerMap } from '~/components/molecules'
import { Hero, HeroMobile, Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { allRoutes } from '~/utils/config'
import css from './Home.module.scss'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <LWithFooter>
      <Header />
      <div className={css.heroWrapDesktop}>
        <Hero />
      </div>
      <div className={css.heroWrapMobile}>
        <HeroMobile
          type="var1"
          logo="Museum"
          text="Eintauchen in die Strauss Dynastie"
          link="More"
          href={allRoutes.museum.url}
        />
        <HeroMobile
          type="var2"
          logo="Concerts"
          text="A musical evening in Vienna"
          link="Reservation"
          href={allRoutes.concerts.url}
        />
        <HeroMobile
          type="var3"
          logo="Restaurant"
          text="A musical evening in Vienna"
          link="Coming soon"
          href={allRoutes.brasserie.url}
        />
      </div>
      <div className={css.mainBlock}>
        <div className={css.contentTitle}>{t('House')}</div>
        <CardLarge />
        <div className={css.cardsContainer}>
          <CardSmall
            title="Delicacies and Souvenirs"
            linkText={allRoutes.shop.title}
            description="Our shop offers specially made Viennese and „House of Strauss“ souvenirs along with culinary delicacies."
            href={allRoutes.shop.url}
          />
          <CardSmall
            type="music"
            title="Musical Masterclasses"
            linkText="More"
            description="Young musicians from all over the world work here with internationally recognised masters to improve their skills."
            href={allRoutes.masterclasses.url}
          />
          <CardSmall
            type="statue"
            title="Strauss Research"
            linkText="More"
            description="The Viennese Institut for Strauss-Research (WISF) is a sponsoring association for scientific research projects relating to the Strauss family and their contemporaries, located in Casino Zögernitz."
            href={allRoutes.research.url}
          />
        </div>
        <div className={css.mapContainer}>
          <CardMedium />
          <InnerMap />
        </div>
      </div>
    </LWithFooter>
  )
}
