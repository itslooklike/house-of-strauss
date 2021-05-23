import { ButtonGhost } from '~/components/atoms'
import css from './HeroTextSlot.module.scss'

type TProps = {
  title: string
  text: string
  link: string
}

export const HeroTextSlot = ({ title, text, link }: TProps) => (
  <div className={css.root}>
    <div className={css.title}>{title}</div>
    <div className={css.content}>
      <div className={css.subtitle}>{text}</div>
      <div>
        <ButtonGhost>{link}</ButtonGhost>
      </div>
    </div>
  </div>
)
