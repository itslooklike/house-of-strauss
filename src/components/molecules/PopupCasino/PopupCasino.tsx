import { ButtonForm, Logo } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
import { fmtTel } from '~/utils/fmtTel'
import { partners } from '~/utils/config'
import css from './PopupCasino.module.scss'

export const PopupCasino = () => (
  <div className={css.popupRoot}>
    <div className={css.popupTitle}>
      <Logo name="casino" />
    </div>
    <div className={css.popupSubtitle}>BISTRO & BRASSERIE</div>
    <div className={css.popupText}>
      The Bistro & Brasserie has it’s own website. To see the menu or do a booking, please visit the
      website or contact us under:
    </div>
    <a className={css.popupLink} href={`mailto:${partners.casino.email}`}>
      {partners.casino.email}
    </a>
    <a className={css.popupLink} href={`tel:${fmtTel(partners.casino.tel)}`}>
      {partners.casino.tel}
    </a>
    <div className={css.popupButtonWrap}>
      <ButtonForm href={partners.casino.site} blank>
        <IconArrowUpRight width="18" />
        &nbsp;Website
      </ButtonForm>
    </div>
  </div>
)
