import css from './CardLarge.module.scss'

export const CardLarge = () => (
  <div className={css.root}>
    <div className={css.content}>
      <div className={css.title}>Events in the Ballroom</div>
      <p className={css.subtitle}>
        The unique acoustics and the elegant setting of the hall combined with the flair of history
        form an impressive backdrop for a wide range of events.
      </p>
      <div className={css.link}>Premises</div>
    </div>
  </div>
)
