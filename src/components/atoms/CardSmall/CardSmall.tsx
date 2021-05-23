import cx from 'classnames'
import css from './CardSmall.module.scss'

type TProps = {
  type?: 'music' | 'statue'
}

export const CardSmall = ({ type }: TProps) => (
  <div className={cx(css.root, type && css[type])}>
    <div>Delicacies and Souvenirs</div>
    <div>Shop</div>
  </div>
)
