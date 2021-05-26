import { ButtonForm } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
import { partners } from '~/utils/config'
import css from './PopupMaster.module.scss'

export const PopupMaster = () => (
  <div className={css.root}>
    <div className={css.logo} />
    <p className={css.text}>
      The European Music Institute Vienna is organising the Musical Masterclasses. Please visiti
      their website to learn more.
    </p>
    <div className={css.buttonWrap}>
      <ButtonForm href={partners.masterclass.site} blank theme="light-purple">
        <IconArrowUpRight width="18" />
        &nbsp;Website
      </ButtonForm>
    </div>
  </div>
)
