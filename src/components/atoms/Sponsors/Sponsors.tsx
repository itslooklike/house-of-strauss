import css from './Sponsors.module.scss'

export const Sponsors = () => (
  <div className={css.root}>
    <div className={css.title}>The House of Strauss is supported by:</div>
    <div className={css.container}>
      <div className={css.inner}>
        <div className={css.sponsorImage} />
        <div className={css.sponsorImage} />
        <div className={css.sponsorImage} />
      </div>
    </div>
  </div>
)
