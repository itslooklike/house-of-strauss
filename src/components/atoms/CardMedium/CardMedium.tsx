import Link from 'next/link'
import { Logo } from '~/components/atoms'
import { IconArrow } from '~/icons'
import { allRoutes } from '~/utils/config'
import css from './CardMedium.module.scss'

export const CardMedium = () => (
  <div className={css.root}>
    <div className={css.content}>
      <div className={css.title}>
        <Logo name="casino" />
      </div>
      <p className={css.subtitle}>
        The old Casino Zögernitz, with the beautiful garden and the magnificent, sonorous ballroom,
        was opened on July 21. 1837 and established as a popular venue for the Viennese society.{' '}
      </p>
      <div className={css.link}>
        <Link href={allRoutes.history.url}>
          <a>
            <IconArrow height={12} />
            &nbsp;{allRoutes.history.title}
          </a>
        </Link>
      </div>
    </div>
  </div>
)
