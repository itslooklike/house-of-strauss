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
    <a href={socials.facebook} target="_blank" rel="noreferrer">
      <IconFacebook width={size} />
    </a>
    <a href={socials.instagram} target="_blank" rel="noreferrer">
      <IconInstagram width={size} />
    </a>
    <a href={socials.youTube} target="_blank" rel="noreferrer">
      <IconYouTube width={size} />
    </a>
  </div>
)
