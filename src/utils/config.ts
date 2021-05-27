export const portalId = 'modal'

export const allRoutes = {
  tickets: { title: 'Tickets', url: '/tickets' },
  museum: { title: 'Museum', url: '/museum' },
  concerts: { title: 'Concerts', url: '/concerts' },
  brasserie: { title: 'Brasserie', url: '/?popup=casino' },
  shop: { title: 'Shop', url: '/shop' },
  directions: { title: 'Directions', url: '/#' },
  events: { title: 'Events', url: '/events' },
  research: { title: 'Research', url: '/?popup=research' },
  masterclasses: { title: 'Masterclasses', url: '/?popup=master' },
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
  facebook: '#',
  instagram: '#',
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

export const gaKey = ''
