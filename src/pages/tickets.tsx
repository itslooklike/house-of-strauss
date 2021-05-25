import type { NextPage } from 'next'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './tickets.module.scss'

const Tickets: NextPage = () => (
  <LWithFooter>
    <Header type="dark" />
    <main className={css.main}>
      <h1 className={css.title}>Tickets</h1>
      <p className={css.subtitle}>Coming soon...</p>
      <FormDefault title="Newsletter" />
    </main>
  </LWithFooter>
)

export default Tickets
