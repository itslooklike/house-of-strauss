import { Sponsors, PageContent } from '~/components/atoms'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Museum.module.scss'

export const Museum = () => (
  <LWithFooter>
    <Header />
    <h1 className={css.hero}>Exhibition</h1>
    <PageContent title="The King of Waltz, Johann Strauss II, was arguably the world‘s first pop star">
      <div className={css.content}>
        <p>Dive into the story of the Strauss dynasty while their legacy comes alive around you.</p>
        <p className={css.text}>The museum will open in June 2022. More info will follow soon.</p>
        <FormDefault title="Subscribe to our newsletter to stay up to date" />
      </div>
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
