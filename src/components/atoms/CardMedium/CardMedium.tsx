import css from './CardMedium.module.scss'

export const CardMedium = () => (
  <div className={css.root}>
    <div className={css.content}>
      <div className={css.title}>Delicacies and Souvenirs</div>
      <p className={css.subtitle}>
        The old Casino Zögernitz, with the beautiful garden and the magnificent, sonorous ballroom,
        was opened on July 21. 1837 and established as a popular venue for the Viennese society.{' '}
      </p>
      <div className={css.link}>History</div>
    </div>
  </div>
)
