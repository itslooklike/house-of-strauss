import Link from 'next/link'
import { IconArrow } from '~/icons'
import { allRoutes } from '~/utils/config'
import css from './CardLarge.module.scss'

export const CardLarge = () => (
  <div className={css.root}>
    <div className={css.content}>
      <div className={css.title}>Events in the Ballroom</div>
      <p className={css.subtitle}>
        The unique acoustics and the elegant setting of the hall combined with the flair of history
        form an impressive backdrop for a wide range of events.
      </p>
      <Link href={allRoutes.events.url}>
        <a className={css.link}>
          <IconArrow height={12} />
          &nbsp;Premises
        </a>
      </Link>
    </div>
  </div>
)
