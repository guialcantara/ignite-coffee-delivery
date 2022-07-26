import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    margin-right: 1rem;
  }

  & > div {
    width: 100%;
  }

  .texts,
  .buttons {
    display: flex;
    gap: 1rem;
  }

  .texts {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    span {
      color: ${(props) => props.theme['base-text']};
      font-weight: bold;
    }
  }
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border: none;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
