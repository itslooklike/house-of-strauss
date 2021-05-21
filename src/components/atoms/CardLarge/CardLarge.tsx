import { styled } from 'linaria/react'

const Root = styled.div`
  height: 485px;
  background-color: var(--orange);
`

export const CardLarge = () => (
  <Root>
    <div>Delicacies and Souvenirs</div>
    <div>Shop</div>
  </Root>
)
