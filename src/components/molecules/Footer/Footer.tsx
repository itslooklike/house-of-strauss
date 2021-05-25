import Link from 'next/link'
import { Socials } from '~/components/atoms'
import { menu, subMenu } from '~/utils/config'
import css from './Footer.module.scss'

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
        {menu[0].map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a className={css.listLink}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        <p className={css.textLight}>More</p>
        {menu[1].map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a className={css.listLink}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={css.bottomSlot}>
        <p className={css.textLight}>© House of Strauss</p>
      </div>
      {subMenu.map((item, index) => (
        <div key={index} className={css.bottomSlot}>
          <Link href={item.url}>
            <a className={css.textMainLink}>{item.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </footer>
)
