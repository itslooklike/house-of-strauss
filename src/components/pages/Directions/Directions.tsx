import { Sponsors, Map } from '~/components/atoms'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { houseEmail } from '~/utils/config'
import css from './Directions.module.scss'

export const Directions = () => (
  <LWithFooter>
    <Header type="dark" />
    <main className={css.root}>
      <h1 className={css.title}>Directions</h1>
      <div className={css.content}>
        <div>
          <div className={css.contactTitle}>House of Strauss</div>
          <p className={css.contactAddress}>
            Im Casino Zögernitz
            <br />
            Döbglinger Hauptstraße 76
            <br />
            1190 Wien
          </p>
          <div className={css.contactWrap}>
            <div>Contact:</div>
            <a href={`mailto:${houseEmail}`}>{houseEmail}</a>
          </div>
          <FormDefault title="Newsletter" />
        </div>

        <div className={css.mapWrap}>
          <Map />
        </div>
      </div>
    </main>
    <Sponsors />
  </LWithFooter>
)
