import { Sponsors, PageContent, PageHero, ButtonForm } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { partners } from '~/utils/config'
import { IconArrowUpRight } from '~/icons'
import css from './Research.module.scss'

export const Research = () => (
  <LWithFooter>
    <Header type="dark" />
    <PageHero theme="mint">Research</PageHero>
    <PageContent>
      <h1 className={css.title}>
        Wiener Institut für
        <br />
        Strauss-Forschung
      </h1>
      <p>
        Das Wiener Institut für Strauss-Forschung (kurz: WISF) ist ein Trägerverein für
        wissenschaftliche Forschungsprojekte rund um die Wiener Musikerfamilie Strauss und ihre
        Zeitgenossen.
      </p>
      <p>
        Wir sind bewusst keine „Strauss-Gesellschaft“. Uns geht es um den längst notwendigen
        vertiefenden, wissenschaftlichen Zugang, damit diese Unterhaltungsmusik endlich ernst
        genommen und nicht nur „irgendwie“ vermarktet wird. In diesem Sinn unterstützen wir das HoS
        bei der visuellen Dokumentation und freuen uns, dass das WISF im HoS eine räumliche Bleibe
        findet.
      </p>
      <div className={css.footer}>
        <div className={css.bottomBlock}>
          <ButtonForm href={partners.research.site} blank theme="mint">
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
