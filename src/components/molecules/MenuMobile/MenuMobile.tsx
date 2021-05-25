import cx from 'classnames'
import Link from 'next/link'
import { Socials, Logo } from '~/components/atoms'
import { IconCross } from '~/icons'
import { menu } from '~/utils/config'
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
      <div className={css.regionWrap}>En *</div>
    </div>

    <div className={css.content}>
      <div className={css.tabs}>
        <div>
          <Link href="/tickets">
            <a className={cx(css.tab, css.active)}>Tickets</a>
          </Link>
        </div>
        <div>
          <Link href="/news">
            <a className={css.tab}>News</a>
          </Link>
        </div>
      </div>

      <div className={css.listWrap}>
        <ul className={css.list}>
          <li className={css.listTitle}>Visit</li>
          {menu[0].map((item, index) => (
            <li key={index}>
              <Link href={item.url}>
                <a className={css.link}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={css.list}>
          <li className={css.listTitle}>More</li>
          {menu[1].map((item, index) => (
            <li key={index}>
              <Link href={item.url}>
                <a className={css.link}>{item.title}</a>
              </Link>
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
