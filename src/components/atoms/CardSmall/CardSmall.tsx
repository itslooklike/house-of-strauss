import { styled } from 'linaria/react'

const Root = styled.div`
  min-width: 300px;
  height: 485px;
  background-color: var(--orange);
`

export const CardSmall = () => (
  <Root>
    <div>Delicacies and Souvenirs</div>
    <div>Shop</div>
  </Root>
)
