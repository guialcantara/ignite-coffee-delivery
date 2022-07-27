import styled from 'styled-components'

interface BoxContainerProps {
  customBorder?: boolean
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
