import { Socials } from '~/components/atoms'
import css from './Footer.module.scss'

const LIST_1 = [
  { title: 'Tickets', url: '#' },
  { title: 'Museum', url: '#' },
  { title: 'Concerts', url: '#' },
  { title: 'Brasserie', url: '#' },
  { title: 'Shop', url: '#' },
  { title: 'Directions', url: '#' },
]

const LIST_2 = [
  { title: 'Events', url: '#' },
  { title: 'Research', url: '#' },
  { title: 'Masterclasses', url: '#' },
  { title: 'History', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Contact', url: '#' },
]

export const Footer = () => (
  <footer className={css.root}>
    <div className={css.inner}>
      <div className={css.info}>
        <p className={css.textMain}>House of Strauss im Casino Zögernitz</p>
        <p className={css.textLight}>Döblinger Hauptstraße 76 1190 Wien</p>
        <div>
          <Socials />
        </div>
      </div>
      <ul className={css.list}>
        <p className={css.textLight}>Visit</p>
        {LIST_1.map((item, index) => (
          <li key={index}>
            <a className={css.listLink} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        <p className={css.textLight}>More</p>
        {LIST_2.map((item, index) => (
          <li key={index}>
            <a className={css.listLink} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className={css.bottomSlot}>
        <p className={css.textLight}>© House of Strauss</p>
      </div>
      <div className={css.bottomSlot}>
        <a className={css.textMainLink} href="#">
          Imprint
        </a>
      </div>
      <div className={css.bottomSlot}>
        <a className={css.textMainLink} href="#">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
)
