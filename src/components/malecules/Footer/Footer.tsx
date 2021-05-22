import { styled } from 'linaria/react'
import { Socials } from '~/components/atoms'

const Root = styled.footer`
  background-color: var(--red);
`

const Inner = styled.div`
  display: grid;
  grid-gap: 40px 30px;
  grid-template-columns: 250px auto 1fr;
  box-sizing: border-box;
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px 60px;
  background: url('/images/violin-contur.svg') top 60px right 20px / 167px 190px no-repeat;

  @media (max-width: 1440px) {
    grid-gap: 0 30px;
    grid-template-columns: auto 1fr;
    background-position: bottom 30px right 40px;
    background-size: 122px 138px;
  }
`

const Info = styled.div`
  display: grid;
  gap: 10px;
  align-self: start;
  max-width: 170px;

  @media (max-width: 1440px) {
    grid-column: span 2;
  }
`

const TextMain = styled.p`
  margin: 0;
  color: var(--light-text);
  font-weight: 600;
  font-size: 14px;
`

const TextMainLink = styled.a`
  margin: 0;
  color: var(--light-text);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
  list-style: none;

  @media (max-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`

const ListLink = styled.a`
  color: var(--light-text);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const BottomSlot = styled.div`
  @media (max-width: 1440px) {
    grid-column: span 2;
  }
`

const LIST_1 = [
  { title: 'Tickets', url: '#' },
  { title: 'Museum', url: '#' },
  { title: 'Concerts', url: '#' },
  { title: 'Brasserie', url: '#' },
  { title: 'Shop', url: '#' },
  { title: 'Directions', url: '#' },
]

const LIST_2 = [
  { title: 'Events', url: '#' },
  { title: 'Research', url: '#' },
  { title: 'Masterclasses', url: '#' },
  { title: 'History', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Contact', url: '#' },
]

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
        {LIST_1.map((item) => (
          <li>
            <ListLink href={item.url}>{item.title}</ListLink>
          </li>
        ))}
      </List>
      <List>
        <TextLight>More</TextLight>
        {LIST_2.map((item) => (
          <li>
            <ListLink href={item.url}>{item.title}</ListLink>
          </li>
        ))}
      </List>

      <BottomSlot>
        <TextLight>© House of Strauss</TextLight>
      </BottomSlot>
      <BottomSlot>
        <TextMainLink href="#">Imprint</TextMainLink>
      </BottomSlot>
      <BottomSlot>
        <TextMainLink href="#">Privacy Policy</TextMainLink>
      </BottomSlot>
    </Inner>
  </Root>
)
