import styled from 'styled-components'

interface QualityItemProps {
  bgColor: 'purple' | 'yellow' | 'yellow-dark' | 'dark'
}

export const TopContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
  }
`

export const Title = styled.div`
  h1 {
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 3.5rem;
  }

  p {
    font-size: 1.25rem;
  }
`

export const QualityList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.5rem;
  margin-top: 3rem;
`

export const QualityItem = styled.div<QualityItemProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    color: ${(props) => props.theme.white};
    border-radius: 9999px;
    background-color: ${(props) => props.theme[props.bgColor]};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
