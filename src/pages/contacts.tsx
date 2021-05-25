import type { NextPage } from 'next'
import { WrapContent, Map } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './contacts.module.scss'

const Contacts: NextPage = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <div className={css.col1}>
          <h1 className={css.title}>House of Strauss</h1>
          <p className={css.text}>Im Casino Zögernitz</p>
          <p className={css.text}>Döbglinger Hauptstraße</p>
          <p className={css.text}>76 1190 Wien</p>
        </div>

        <div className={css.mapWrap}>
          <Map />
        </div>
      </div>
    </WrapContent>
  </LWithFooter>
)

export default Contacts