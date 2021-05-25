import type { NextPage } from 'next'
import { Footer, FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import css from './tickets.module.scss'

const Tickets: NextPage = () => (
  <div>
    <Header type="dark" />
    <main className={css.main}>
      <h1 className={css.title}>Tickets</h1>
      <p className={css.subtitle}>Coming soon...</p>
      <FormDefault />
    </main>

    <Footer />
  </div>
)

export default Tickets
