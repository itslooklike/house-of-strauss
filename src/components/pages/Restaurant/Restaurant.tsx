import { Sponsors, PageContent, PageHero, ButtonForm } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { partners } from '~/utils/config'
import { IconArrowUpRight } from '~/icons'
import css from './Restaurant.module.scss'

export const Restaurant = () => (
  <LWithFooter>
    <Header />
    <PageHero>RESTAURANT</PageHero>
    <PageContent>
      <h1 className={css.title}>
        Soul food
        <br />
        with a musical touch
      </h1>
      <p>
        Die Brasserie Casino Zögernitz verbindet eklektisches Design mit Wiener Charme:
        beeindruckend ist der spürbare Spirit vergangener Zeiten ebenso wie die gegenwärtige
        Atmosphäre, getragen von der hingebungsvollen Begeisterung aller Mitwirkenden. Die Cuisine
        präsentiert sich als klassische Brasserieküche: Soul Food und wohlfühlen - hier wird
        handwerklich auf höchstem Niveau gekocht und gearbeitet, ganz nach der berühmten
        französischen Kochkunst.
      </p>
      <p>
        Ob eiskalter Champagner, Brasserie Signature Drinks oder köstliche Gerichte - alles wird
        erfrischend modern und leidenschaftlich zubereitet. Der neue Treffpunkt in Döbling
        begeistert mit charmantem persönlichem Service, einer raffinierten Auswahl an Speisen und
        Drinks sowie einer einzigartigen Kulisse und einem traumhaften Garten!
      </p>
      <div className={css.footer}>
        <div className={css.contacts}>
          <a href={`mailto:${partners.casino.email}`}>{partners.casino.email}</a>
          <a href={`tel:${partners.casino.tel}`}>{partners.casino.tel}</a>
        </div>
        <div className={css.bottomBlock}>
          <ButtonForm href={partners.casino.site} blank theme="salon">
            <IconArrowUpRight width="18" />
            &nbsp;Website
          </ButtonForm>
          <div className={css.logo} />
        </div>
      </div>
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
