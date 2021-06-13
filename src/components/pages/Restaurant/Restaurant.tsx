import { Sponsors, PageContent, PageHero } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Restaurant.module.scss'

export const Restaurant = () => (
  <LWithFooter>
    <Header />
    <PageHero>RESTAURANT</PageHero>
    <PageContent>
      <div>Soul food with a musical touch</div>
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
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
