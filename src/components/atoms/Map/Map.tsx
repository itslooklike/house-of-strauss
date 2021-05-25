import GoogleMapReact from 'google-map-react'

export const Map = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: '' }}
    defaultCenter={{
      lat: 59.95,
      lng: 30.33,
    }}
    defaultZoom={11}
  />
)
