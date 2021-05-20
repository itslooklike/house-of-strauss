import { styled } from 'linaria/react'

const Root = styled.footer`
  background-color: var(--red);
`

const Inner = styled.div`
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
`

export const Footer = () => (
  <Root>
    <Inner>
      <div>House of Strauss im Casino Zögernitz</div>
      <div>Döblinger Hauptstraße 76 1190 Wien</div>
      <div>© House of Strauss</div>

      <div>
        <div>
          <div>Visit</div>
          <div>Tickets</div>
          <div>Museum</div>
          <div>Concerts</div>
          <div>Brasserie</div>
          <div>Shop</div>
          <div>Directions</div>
        </div>
      </div>
      <div>
        <div>
          <div>More</div>
          <div>Events</div>
          <div>Research</div>
          <div>Masterclasses</div>
          <div>History</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </Inner>
  </Root>
)
