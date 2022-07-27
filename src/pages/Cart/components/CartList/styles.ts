import styled from 'styled-components'

export const CartListContainer = styled.ul`
  list-style: none;
  max-height: 17.6rem;
  overflow-y: auto;
`

export const CartListFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .total {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }

  button {
    padding: 1rem;
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    background: ${(props) => props.theme.yellow};
    margin-top: 1rem;
  }
`
