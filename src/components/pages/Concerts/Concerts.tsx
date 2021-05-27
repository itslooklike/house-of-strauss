import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Concerts.module.scss'

export const Concerts = () => (
  <LWithFooter>
    <Header />
    <div className={css.hero} />
    <main className={css.inner}>
      <div className={css.content}>
        <h1 className={css.title}>Concerts in the historic ballroom</h1>
        <p className={css.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>
      <div className={css.rightSlot}>
        <div className={css.pageTitle}>Concerts</div>
      </div>
    </main>
  </LWithFooter>
)
