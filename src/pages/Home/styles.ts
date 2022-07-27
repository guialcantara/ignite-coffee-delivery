import styled from 'styled-components'

export const HomeContainer = styled.main`
  & > h2 {
    font-size: 2rem;
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 3rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 1.5rem;
  row-gap: 4rem;
  margin-top: 2rem;
`
