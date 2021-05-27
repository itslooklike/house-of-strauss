import cx from 'classnames'
import Link from 'next/link'
import { LinkPopup } from '~/utils/LinkPopup'
import { Socials, Logo, Region } from '~/components/atoms'
import { IconCross } from '~/icons'
import { menu, allRoutes } from '~/utils/config'
import css from './MenuMobile.module.scss'

type TProps = {
  onClick: VoidFunction
}

export const MenuMobile = ({ onClick }: TProps) => (
  <div className={css.root}>
    <div className={css.header}>
      <IconCross width={24} onClick={onClick} />
      <div className={css.logoWrap}>
        <Logo />
      </div>
      <div>
        <Region />
      </div>
    </div>

    <div className={css.content}>
      <div className={css.tabs}>
        <div>
          <Link href={allRoutes.tickets.url}>
            <a className={cx(css.tab, css.active)}>{allRoutes.tickets.title}</a>
          </Link>
        </div>
        <div>
          <Link href={allRoutes.news.url}>
            <a className={css.tab}>{allRoutes.news.title}</a>
          </Link>
        </div>
      </div>

      <div className={css.listWrap}>
        <ul className={css.list}>
          <li className={css.listTitle}>Visit</li>
          {menu[0].map((item, index) => (
            <li key={index}>
              <LinkPopup href={item.url} withPopup={item.withPopup}>
                <a className={css.link}>{item.title}</a>
              </LinkPopup>
            </li>
          ))}
        </ul>
        <ul className={css.list}>
          <li className={css.listTitle}>More</li>
          {menu[1].map((item, index) => (
            <li key={index}>
              <LinkPopup href={item.url} withPopup={item.withPopup}>
                <a className={css.link}>{item.title}</a>
              </LinkPopup>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={css.socialsWrap}>
      <Socials size={24} />
    </div>
  </div>
)
