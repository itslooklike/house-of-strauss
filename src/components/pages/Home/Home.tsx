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
          route={allRoutes.museum}
        />
        <HeroMobile
          type="var2"
          logo="Concerts"
          text="A musical evening in Vienna"
          link="Reservation"
          route={allRoutes.concerts}
        />
        <HeroMobile
          type="var3"
          logo="Restaurant"
          text="Soul food with a musical touch"
          link="Coming soon"
          route={allRoutes.brasserie}
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
            route={allRoutes.shop}
          />
          <CardSmall
            type="music"
            title="Music Master Courses"
            linkText="More"
            description="Young musicians from all over the world work here with internationally recognised masters to improve their skills."
            route={allRoutes.masterclasses}
          />
          <CardSmall
            type="statue"
            title="Strauss Research"
            linkText="More"
            description="The Viennese Institut for Strauss-Research (WISF) is a sponsoring association for scientific research projects relating to the Strauss family and their contemporaries, located in Casino Zögernitz."
            route={allRoutes.research}
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
