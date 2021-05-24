import type { NextPage } from 'next'
import { Footer } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { IconCheck } from '~/icons'
import css from './tickets.module.scss'

const Tickets: NextPage = () => (
  <div>
    <Header type="dark" />
    <main className={css.main}>
      <h1 className={css.title}>Tickets</h1>
      <p className={css.subtitle}>Coming soon...</p>

      <form>
        <p className={css.formTitle}>Newsletter</p>

        <div className={css.firstInput}>
          <div className={css.inputWrap}>
            <input className={css.input} placeholder="Full name" type="text" />
          </div>
        </div>

        <div className={css.secondInput}>
          <div className={css.inputWrap}>
            <input className={css.input} placeholder="Email" type="email" />
          </div>
        </div>

        <div className={css.controlWrap}>
          <button className={css.buttonSubmit} type="submit">
            <IconCheck width={20} />
            &nbsp;Submit
          </button>
          <span className={css.policy}>
            By submitting you accept our{' '}
            <a className={css.policyLink} href="#">
              privacy policy
            </a>
          </span>
        </div>
      </form>
    </main>

    <Footer />
  </div>
)

export default Tickets
