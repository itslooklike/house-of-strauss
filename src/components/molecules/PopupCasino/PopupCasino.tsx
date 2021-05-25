import { ButtonForm, Logo } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
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
    <a className={css.popupLink} href="mailto:bistro@zoegernitz.at">
      bistro@zoegernitz.at
    </a>
    <a className={css.popupLink} href="tel:+431122123445">
      +43 11 22 1234 45
    </a>
    <div className={css.popupButtonWrap}>
      <ButtonForm href="www.???.at" blank>
        <IconArrowUpRight width="18" />
        &nbsp;Website
      </ButtonForm>
    </div>
  </div>
)
