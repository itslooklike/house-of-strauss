import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NextPage } from 'next'
import { CardSmall, CardLarge, CardMedium, Modal } from '~/components/atoms'
import { InnerMap, PopupMaster, PopupResearch } from '~/components/molecules'
import { Hero, HeroMobile, Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { allRoutes } from '~/utils/config'
import css from './index.module.scss'

const Home: NextPage = () => {
  const [showMaster, setShowMaster] = useState(false)
  const handleShowMaster = () => setShowMaster(true)
  const handleCloseMaster = () => setShowMaster(false)

  const [showResearch, setShowResearch] = useState(false)
  const handleShowResearch = () => setShowResearch(true)
  const handleCloseResearch = () => setShowResearch(false)

  const { t } = useTranslation()

  return (
    <>
      {showMaster && (
        <Modal onClose={handleCloseMaster}>
          <PopupMaster />
        </Modal>
      )}
      {showResearch && (
        <Modal onClose={handleCloseResearch}>
          <PopupResearch />
        </Modal>
      )}
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
          />
          <HeroMobile
            type="var2"
            logo="Concerts"
            text="A musical evening in Vienna"
            link="Reservation"
          />
          <HeroMobile
            type="var3"
            logo="Restaurant"
            text="A musical evening in Vienna"
            link="Coming soon"
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
              linkHref={allRoutes.shop.url}
            />
            <CardSmall
              type="music"
              title="Musical Masterclasses"
              linkText="More"
              description="Young musicians from all over the world work here with internationally recognised masters to improve their skills."
              onClick={handleShowMaster}
            />
            <CardSmall
              type="statue"
              title="Strauss Research"
              linkText="More"
              description="The Viennese Institut for Strauss-Research (WISF) is a sponsoring association for scientific research projects relating to the Strauss family and their contemporaries, located in Casino Zögernitz."
              onClick={handleShowResearch}
            />
          </div>
          <div className={css.mapContainer}>
            <CardMedium />
            <InnerMap />
          </div>
        </div>
      </LWithFooter>
    </>
  )
}

export default Home
