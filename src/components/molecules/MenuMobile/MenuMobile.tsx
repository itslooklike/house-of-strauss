import { Socials } from '~/components/atoms'
import { menu } from '~/utils/config'
import css from './MenuMobile.module.scss'

export const MenuMobile = () => (
  <div className={css.root}>
    <div className={css.listWrap}>
      <ul className={css.list}>
        {menu[0].map((item, index) => (
          <li key={index}>
            <a className={css.link} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        {menu[1].map((item, index) => (
          <li key={index}>
            <a className={css.link} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <Socials fill="bordeaux" size={40} />
    </div>
  </div>
)
