import { WrapContent, Map, TextPageTitle } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Contacts.module.scss'

export const Contacts = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <div className={css.col1}>
          <TextPageTitle>House of Strauss</TextPageTitle>
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
