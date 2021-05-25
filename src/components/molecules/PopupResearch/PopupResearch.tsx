import { ButtonForm } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
import css from './PopupResearch.module.scss'

export const PopupResearch = () => (
  <div className={css.root}>
    <div className={css.logo} />
    <p className={css.text}>
      To learn more about the Strauss Research, here you will be forwarded to their website.
    </p>
    <div className={css.buttonWrap}>
      <ButtonForm href="https://www.johann-strauss.at/" blank theme="mint">
        <IconArrowUpRight width="18" />
        &nbsp;Website
      </ButtonForm>
    </div>
  </div>
)
