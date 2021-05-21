import { styled } from 'linaria/react'
import { Socials } from '~/components/atoms'

const Root = styled.footer`
  background-color: var(--red);
`

const Inner = styled.div`
  display: grid;
  grid-gap: 40px 30px;
  grid-template-columns: 250px auto 1fr;
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px 60px;
  background: url('/images/violin-contur.svg') top 60px right 20px / 167px 190px no-repeat;
`

const Info = styled.div`
  display: grid;
  gap: 10px;
  align-self: start;
  max-width: 170px;
`

const TextMain = styled.p`
  margin: 0;
  color: var(--light-text);
  font-weight: 600;
  font-size: 14px;
`

const TextLight = styled.p`
  margin: 0;
  color: var(--light-text);
  font-size: 14px;
`

const List = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
`

export const Footer = () => (
  <Root>
    <Inner>
      <Info>
        <TextMain>House of Strauss im Casino Zögernitz</TextMain>
        <TextLight>Döblinger Hauptstraße 76 1190 Wien</TextLight>
        <div>
          <Socials />
        </div>
      </Info>
      <List>
        <TextLight>Visit</TextLight>
        <TextMain>Tickets</TextMain>
        <TextMain>Museum</TextMain>
        <TextMain>Concerts</TextMain>
        <TextMain>Brasserie</TextMain>
        <TextMain>Shop</TextMain>
        <TextMain>Directions</TextMain>
      </List>
      <List>
        <TextLight>More</TextLight>
        <TextMain>Events</TextMain>
        <TextMain>Research</TextMain>
        <TextMain>Masterclasses</TextMain>
        <TextMain>History</TextMain>
        <TextMain>About</TextMain>
        <TextMain>Contact</TextMain>
      </List>

      <TextLight>© House of Strauss</TextLight>
      <TextMain>Imprint</TextMain>
      <TextMain>Privacy Policy</TextMain>
    </Inner>
  </Root>
)
