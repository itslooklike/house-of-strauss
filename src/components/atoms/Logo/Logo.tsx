import { default as IconLogo } from './assets/logo.svg'
import { default as IconLogoCasino } from './assets/logo-casino.svg'

type TProps = {
  name?: 'house' | 'casino'
}

export const Logo = ({ name = 'house' }: TProps) => {
  switch (name) {
    case 'casino':
      return <IconLogoCasino width={317} />
    default:
      return <IconLogo width={106} />
  }
}
