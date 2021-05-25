import Link from 'next/link'
import { ButtonGhost } from '~/components/atoms'
import css from './HeroTextSlot.module.scss'

type TProps = {
  title: string
  text: string
  link: string
  linkUrl: string
  onMouseEnter: VoidFunction
}

export const HeroTextSlot = ({ title, text, link, linkUrl, onMouseEnter }: TProps) => (
  <div className={css.root} onMouseEnter={onMouseEnter}>
    <div className={css.title}>{title}</div>
    <div className={css.content}>
      <div className={css.subtitle}>{text}</div>
      <div>
        <Link href={linkUrl}>
          <ButtonGhost>{link}</ButtonGhost>
        </Link>
      </div>
    </div>
  </div>
)
