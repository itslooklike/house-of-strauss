import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Museum.module.scss'

export const Museum = () => (
  <LWithFooter>
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
  </LWithFooter>
)
