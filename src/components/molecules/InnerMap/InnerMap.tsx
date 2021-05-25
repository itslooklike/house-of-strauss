import { Button, Map } from '~/components/atoms'
import css from './InnerMap.module.scss'

export const InnerMap = () => (
  <div className={css.root}>
    <Map />
    <div className={css.btnWrap}>
      <Button>Directions</Button>
    </div>
  </div>
)
