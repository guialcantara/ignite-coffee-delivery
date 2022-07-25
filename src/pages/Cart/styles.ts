import styled from 'styled-components'

interface BoxContainerProps {
  customBorder?: boolean
}
interface PaymentTypeButtonProps {
  selected?: boolean
}

export const CartContainer = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1rem;
  & > div:nth-child(1) {
    grid-column: 1;
    grid-row: 1/3;
  }

  & > div:nth-child(2) {
    grid-column: 1;
    grid-row: 3;
  }

  & > div:nth-child(3) {
    grid-column: 2;
    grid-row: 1/4;
  }
`

export const BoxContainer = styled.div<BoxContainerProps>`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 27rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px
    ${(props) => {
      return props.customBorder ? '44px' : '6px'
    }};
`

export const TextInput = styled.input`
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 8px;
  padding-left: 1rem;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3.5rem;
  grid-template-rows: repeat(4, 2.5rem);
  gap: 1rem;
  margin-top: 2rem;

  & > input:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  & > input:nth-child(2) {
    grid-column: 1/-1;
    grid-row: 2;
  }

  & > input:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }

  & > input:nth-child(4) {
    grid-column: 2/-1;
    grid-row: 3;
  }

  & > input:nth-child(5) {
    grid-column: 1;
    grid-row: 4;
  }

  & > input:nth-child(6) {
    grid-column: 2;
    grid-row: 4;
  }

  & > input:nth-child(7) {
    grid-column: 3;
    grid-row: 4;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
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
`

export const CartList = styled.ul`
  list-style: none;
  max-height: 25rem;
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
