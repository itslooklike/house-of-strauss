import { css, cx } from 'linaria'
import { styled } from 'linaria/react'

import { default as IconLogo } from './assets/logo.svg'

const Root = styled.article``

const styles = css``

export const Logo = (props, ref) => (
  <div>
    <IconLogo />
  </div>
)
