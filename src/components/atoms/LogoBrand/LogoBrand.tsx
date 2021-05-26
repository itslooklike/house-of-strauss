import { default as BrandMuseum } from './assets/image-hero-museum.svg'
import { default as BrandConcerts } from './assets/image-hero-concerts.svg'
import { default as BrandRestaurant } from './assets/image-hero-restaurant.svg'

const MapIcons = {
  Museum: BrandMuseum,
  Concerts: BrandConcerts,
  Restaurant: BrandRestaurant,
}

type TLogos = keyof typeof MapIcons

export const LogoBrand = ({ logo }: { logo: TLogos }) => {
  const Component = MapIcons[logo]
  return <Component />
}
