import { ButtonGhost } from '~/components/atoms'
import css from './HeroTextSlot.module.scss'

type TProps = {
  title: string
  text: string
  link: string
  onMouseEnter: VoidFunction
}

export const HeroTextSlot = ({ title, text, link, onMouseEnter }: TProps) => (
  <div className={css.root} onMouseEnter={onMouseEnter}>
    <div className={css.title}>{title}</div>
    <div className={css.content}>
      <div className={css.subtitle}>{text}</div>
      <div>
        <ButtonGhost>{link}</ButtonGhost>
      </div>
    </div>
  </div>
)
