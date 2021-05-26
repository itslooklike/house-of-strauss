import { ButtonForm } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
import { partners } from '~/utils/config'
import css from './PopupResearch.module.scss'

export const PopupResearch = () => (
  <div className={css.root}>
    <div className={css.logo} />
    <p className={css.text}>
      To learn more about the Strauss Research, here you will be forwarded to their website.
    </p>
    <div className={css.buttonWrap}>
      <ButtonForm href={partners.research.site} blank theme="mint">
        <IconArrowUpRight width="18" />
        &nbsp;Website
      </ButtonForm>
    </div>
  </div>
)
