import cx from 'classnames'
import css from './CardSmall.module.scss'

type TProps = {
  type?: 'music' | 'statue'
}

export const CardSmall = ({ type }: TProps) => (
  <div className={cx(css.root, type && css[type])}>
    <div className={css.content}>
      <div className={css.title}>Delicacies and Souvenirs</div>
      <div className={css.link}>Shop</div>
    </div>
  </div>
)
