import { IconFacebook, IconInsta, IconYouTube } from '~/icons'
import css from './Socials.module.scss'

export const Socials = () => (
  <div className={css.root}>
    <IconFacebook />
    <IconInsta />
    <IconYouTube />
  </div>
)
