import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const PaymentTypeButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  min-width: 11rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  border: none;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &.selected {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
