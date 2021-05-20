import { styled } from 'linaria/react'
import type { NextPage } from 'next'

import { Logo } from '~/components/Logo'
import { IconFacebook, IconInsta, IconYouTube } from '~/icons'

const Root = styled.div`
  height: 880px;
  background-color: var(--blue);
  background-image: url('/images/museum-1.jpg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 1556px 880px;
`

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1360px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 20px 90px;
`

const SocialWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: auto;
`

const LogoWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin-left: auto;
`

const NavListItem = styled.li`
  color: var(--light-text);
`

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  color: var(--light-text);
`

const TextMuseum = styled.div`
  font-size: 36px;
  font-family: 'Begum Sans';
`

const TextConcerts = styled.div`
  font-size: 68px;
  font-family: 'Northwell';
`

const TextRestaurant = styled.div`
  font-size: 28px;
  font-family: 'Sign Maker JNL';
`

const Home: NextPage = () => (
  <Root>
    <Inner>
      <Header>
        <SocialWrap>
          <IconFacebook />
          <IconInsta />
          <IconYouTube />
        </SocialWrap>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <nav>
          <NavList>
            <NavListItem>Visit</NavListItem>
            <NavListItem>More</NavListItem>
            <NavListItem>News</NavListItem>
            <NavListItem>Tickets</NavListItem>
          </NavList>
        </nav>
      </Header>

      <ContentWrap>
        <TextMuseum>Museum</TextMuseum>
        <TextConcerts>Concerts</TextConcerts>
        <TextRestaurant>Restaurant</TextRestaurant>
      </ContentWrap>
    </Inner>
  </Root>
)

export default Home
