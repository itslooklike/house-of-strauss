import { Sponsors, PageContent, PageHero, ButtonForm } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { partners } from '~/utils/config'
import { IconArrowUpRight } from '~/icons'
import css from './Master.module.scss'

export const Master = () => (
  <LWithFooter>
    <Header />
    <PageHero theme="light-purple" size="slim">
      Music Master Courses
    </PageHero>
    <PageContent>
      <h1 className={css.title}>
        "Don't only practice your art, but force your way into its secrets"
      </h1>
      <p>Ludwig van Beethoven</p>
      <p>
        As one of the world's leading summer academies, European Music Institute Vienna, founded in
        1975 as Wiener Meisterkurse by Günther Theuring, under the artistic direction of Jörg
        Birhance, we want to pursue this tour de force together with our students, young musicians
        from all over the world: Through the study and practice of the masterworks of the classic
        epoch we believe to consign a key to the understanding of all musical styles and epochs of
        the international concert repertoire up to contemporary music.
      </p>
      <p>
        The epoch of Viennese Classics, the period in which music as art has found to its "highest
        clarity of inner and outer appearance" (Hans Swarowsky), is thus a key for our musical
        education. It can provide those striving for full understanding of all parameters of a
        musical piece – insofar they have learned to combine theory and practice – with the skills
        to accomplish every style of art music.
      </p>
      <p>
        We introduce young artists to musical analysis, performance practice and to the various
        criteria for evaluating compositions. With additional features, European Music Institute
        Vienna aims to prepare students for the versatile and challenging future of the musician’s
        profession.
      </p>
      <p>
        Music keeps its secrets, and yet, we can never stop striving to disclose them, even with the
        awareness that we might never disclose them at all. Therefore, as musicians, who feel
        compelled to our art, we must indeed follow the demanding and beautiful imperative Beethoven
        has left to us.
      </p>
      <div className={css.footer}>
        <div className={css.bottomBlock}>
          <ButtonForm href={partners.masterclass.site} blank theme="light-purple">
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
