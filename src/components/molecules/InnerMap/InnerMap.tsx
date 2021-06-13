import { IconArrow } from '~/icons'
import { ButtonForm, Map } from '~/components/atoms'
import css from './InnerMap.module.scss'

export const InnerMap = () => (
  <div className={css.root}>
    <Map />
    <div className={css.btnWrap}>
      <ButtonForm>
        <IconArrow width="14" />
        &nbsp;Directions
      </ButtonForm>
    </div>
  </div>
)
