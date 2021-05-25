import { default as IconLogo } from './assets/logo.svg'
import { default as IconLogoCasino } from './assets/logo-casino.svg'

type TProps = {
  name?: 'house' | 'casino'
  width?: number
}

export const Logo = ({ name = 'house', width }: TProps) => {
  switch (name) {
    case 'casino':
      return <IconLogoCasino width={width || 317} />
    default:
      return <IconLogo width={width || 106} />
  }
}
