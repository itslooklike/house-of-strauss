import GoogleMapReact from 'google-map-react'
import { Button } from '~/components/atoms'
import css from './InnerMap.module.scss'

export const InnerMap = () => (
  <div className={css.root}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      defaultCenter={{
        lat: 59.95,
        lng: 30.33,
      }}
      defaultZoom={11}
    />
    <div className={css.btnWrap}>
      <Button>Directions</Button>
    </div>
  </div>
)
