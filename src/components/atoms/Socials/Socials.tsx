import { styled } from 'linaria/react'

import { IconFacebook, IconInsta, IconYouTube } from '~/icons'

const Root = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  gap: 10px;
  align-items: center;
`

export const Socials = () => (
  <Root>
    <IconFacebook />
    <IconInsta />
    <IconYouTube />
  </Root>
)
