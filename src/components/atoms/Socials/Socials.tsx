import cx from 'classnames'
import { IconFacebook, IconInstagram, IconYouTube } from '~/icons'
import { socials } from '~/utils/config'
import css from './Socials.module.scss'

type TProps = {
  size?: number
}

export const Socials = ({ size = 14 }: TProps) => (
  <div className={cx(css.root)}>
    <a className={css.link} href={socials.facebook} target="_blank" rel="noreferrer">
      <IconFacebook width={size} />
    </a>
    <a className={css.link} href={socials.instagram} target="_blank" rel="noreferrer">
      <IconInstagram width={size} />
    </a>
    <a className={css.link} href={socials.youTube} target="_blank" rel="noreferrer">
      <IconYouTube width={size} />
    </a>
  </div>
)
