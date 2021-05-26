import GoogleMapReact from 'google-map-react'
import { gaKey } from '~/utils/config'

export const Map = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: gaKey }}
    defaultCenter={{
      lat: 59.95,
      lng: 30.33,
    }}
    defaultZoom={11}
  />
)
