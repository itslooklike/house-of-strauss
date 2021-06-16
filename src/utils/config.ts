export const portalId = 'modal'
export const popupParam = '__popup' as const

export type TRoute = {
  title: string
  url: string
  withPopup?: boolean
}

export const allRoutes: { [_: string]: TRoute } = {
  directions: { title: 'Directions', url: '/directions' },
  brasserie: { title: 'Brasserie', url: `/restaurant` },
  research: { title: 'Research', url: `/research` },
  // masterclasses: { title: 'Master Courses', url: `?${popupParam}=master`, withPopup: true },
  masterclasses: { title: 'Master Courses', url: `/master` },
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

export const contacts = [
  {
    title: 'Concerts & Events',
    text: 'House of Strauss',
    name: 'Hermann Rauter',
    email: 'concerts@houseofstrauss.at',
    web: 'https://www.houseofstrauss.at/concerts',
  },
  {
    title: 'Exhibition & Shop',
    text: 'House of Strauss',
    name: 'Hermann Rauter',
    email: 'exhibition@houseofstrauss.at',
    web: 'https://www.houseofstrauss.at/exhibition',
  },
  {
    title: 'Ballroom Rental',
    text: 'Mind-Set GmbH',
    name: 'Elisabeth Hanser',
    email: 'ballroom@houseofstrauss.at',
    web: 'https://www.houseofstrauss.at/ballroom',
  },
  {
    title: 'Bistro & Brasserie',
    text: 'Marco Simonis - Urban Appetite',
    name: '+43 11 22 34 56',
    email: 'welcome@marcosimonis.com',
    web: 'https://www.marcosimonis.com',
  },
  {
    title: 'Musical Masterclasses',
    text: 'European Music Institute Vienna',
    name: 'Jörg Birhance',
    email: 'Info@european-music-institute.com',
    web: 'https://www.emi-vienna.com',
  },
  {
    title: 'Strauss Research',
    text: 'Institute for Strauss Research Vienna',
    name: 'Prof. Norbert Rubey',
    email: 'office@johann-strauss.at',
    web: 'https://www.johann-strauss.at',
  },
]

export const houseEmail = 'info@houseofstrauss.at'
