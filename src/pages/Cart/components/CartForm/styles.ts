import styled from 'styled-components'

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
