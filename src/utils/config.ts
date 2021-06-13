export const portalId = 'modal'
export const popupParam = '__popup' as const

export type TRoute = {
  title: string
  url: string
  withPopup?: boolean
}

export const allRoutes: { [_: string]: TRoute } = {
  directions: { title: 'Directions', url: '/#' },

  brasserie: { title: 'Brasserie', url: `/restaurant` },
  research: { title: 'Research', url: `?${popupParam}=research`, withPopup: true },
  masterclasses: { title: 'Master Courses', url: `?${popupParam}=master`, withPopup: true },
  tickets: { title: 'Tickets', url: '/tickets' },
  museum: { title: 'Museum', url: '/museum' },
  concerts: { title: 'Concerts', url: '/concerts' },
  shop: { title: 'Shop', url: '/shop' },
  events: { title: 'Events', url: '/events' },
  history: { title: 'History', url: '/history' },
  about: { title: 'About', url: '/about' },
  contact: { title: 'Contact', url: '/contacts' },
  imprint: { title: 'Imprint', url: '/imprint' },
  privacy: { title: 'Privacy Policy', url: '/privacy' },
  news: { title: 'News', url: '/news' },
}

export const menu = [
  [
    allRoutes.tickets,
    allRoutes.museum,
    allRoutes.concerts,
    allRoutes.brasserie,
    allRoutes.shop,
    allRoutes.directions,
  ],
  [
    allRoutes.events,
    allRoutes.research,
    allRoutes.masterclasses,
    allRoutes.history,
    allRoutes.about,
    allRoutes.contact,
  ],
]

export const socials = {
  facebook: 'https://www.facebook.com/houseofstraussvienna',
  instagram: 'https://www.instagram.com/houseofstrauss_vienna',
  youTube: '#',
}

export const partners = {
  casino: {
    email: 'bistro@zoegernitz.at',
    tel: '+43 11 22 1234 45',
    site: 'https://google.com', // FIXME: need correct
  },
  masterclass: {
    site: 'https://emi-vienna.com/en',
  },
  research: {
    site: 'https://www.johann-strauss.at',
  },
}

export const gaKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
