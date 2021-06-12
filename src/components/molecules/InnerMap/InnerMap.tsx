import { IconArrow } from '~/icons'
import { Button, Map } from '~/components/atoms'
import css from './InnerMap.module.scss'

export const InnerMap = () => (
  <div className={css.root}>
    <Map />
    <div className={css.btnWrap}>
      <Button>
        <IconArrow width="14" />
        &nbsp;<span className={css.btnText}>Directions</span>
      </Button>
    </div>
  </div>
)
