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
      <span className="visually-hidden">Facebook</span>
      <IconFacebook width={size} />
    </a>
    <a className={css.link} href={socials.youTube} target="_blank" rel="noreferrer">
      <span className="visually-hidden">YouTube</span>
      <IconYouTube width={size} />
    </a>
    <a className={css.link} href={socials.instagram} target="_blank" rel="noreferrer">
      <span className="visually-hidden">Instagram</span>
      <IconInstagram width={size} />
    </a>
  </div>
)
