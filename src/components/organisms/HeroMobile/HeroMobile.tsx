import cx from 'classnames'
import { ButtonGhost } from '~/components/atoms'
import css from './HeroMobile.module.scss'

type TProps = {
  title: string
  text: string
  link: string
  type: 'var1' | 'var2' | 'var3'
}

export const HeroMobile = (props: TProps) => {
  const { title, text, link, type } = props

  return (
    <div className={cx(css.root, css[type])}>
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
        <ButtonGhost>{link}</ButtonGhost>
      </div>
    </div>
  )
}
