import GoogleMapReact from 'google-map-react'
import { gaKey } from '~/utils/config'

// https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPanoramaOptions
const defaultMapOptions = {
  fullscreenControl: false,
  // zoomControl: false,
}

const position = {
  lat: 48.240437938089265,
  lng: 16.35542094131028,
}

export const Map = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: gaKey || '' }}
    defaultCenter={position}
    defaultZoom={16}
    options={defaultMapOptions}
    onGoogleApiLoaded={({ map, maps }) => {
      const marker = new maps.Marker({ position })
      marker.setMap(map)
    }}
    yesIWantToUseGoogleMapApiInternals
  />
)
