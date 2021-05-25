import type { NextPage } from 'next'
import { Footer, FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import css from './museum.module.scss'

const Museum: NextPage = () => (
  <div>
    <Header mobileDark />
    <div className={css.hero} />
    <main className={css.main}>
      <h1 className={css.title}>
        The King of Waltz, Johann Strauss II, was arguably the world‘s first pop star
      </h1>
      <div className={css.content}>
        <div className={css.contentInner}>
          <p className={css.subtitle}>
            Dive into the story of the Strauss dynasty while their legacy comes alive around you.
          </p>
          <p className={css.text}>The museum will open in June 2022. More info will follow soon.</p>
          <FormDefault title="Subscribe to our newsletter to stay up to date" mobileLight />
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default Museum
