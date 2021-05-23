import cx from 'classnames'
import { IconFacebook, IconInstagram, IconYouTube } from '~/icons'
import { socials } from '~/utils/config'
import css from './Socials.module.scss'

type TProps = {
  fill?: 'bordeaux'
  size?: number
}

export const Socials = ({ fill, size = 14 }: TProps) => (
  <div className={cx(css.root, fill && css[fill])}>
    <a href={socials.facebook}>
      <IconFacebook width={size} height={size} />
    </a>
    <a href={socials.instagram}>
      <IconInstagram width={size} height={size} />
    </a>
    <a href={socials.youTube}>
      <IconYouTube width={size} height={size} />
    </a>
  </div>
)
