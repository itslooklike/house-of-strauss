import Link from 'next/link'
import { Socials } from '~/components/atoms'
import { menu, allRoutes } from '~/utils/config'
import { LinkPopup } from '~/utils/LinkPopup'
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
            <LinkPopup href={item.url} withPopup={item.withPopup}>
              <a className={css.listLink}>{item.title}</a>
            </LinkPopup>
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        <p className={css.textLight}>More</p>
        {menu[1].map((item, index) => (
          <li key={index}>
            <LinkPopup href={item.url} withPopup={item.withPopup}>
              <a className={css.listLink}>{item.title}</a>
            </LinkPopup>
          </li>
        ))}
      </ul>

      <div className={css.bottomSlot}>
        <p className={css.textLight}>© House of Strauss</p>
      </div>
      <div className={css.bottomSlot}>
        <Link href={allRoutes.imprint.url}>
          <a className={css.textMainLink}>{allRoutes.imprint.title}</a>
        </Link>
      </div>
      <div className={css.bottomSlot}>
        <Link href={allRoutes.privacy.url}>
          <a className={css.textMainLink}>{allRoutes.privacy.title}</a>
        </Link>
      </div>
    </div>
  </footer>
)
