import styled from 'styled-components'

interface InformationItemProps {
  bgColor: 'purple' | 'yellow' | 'yellow-dark'
}

export const FinishOrderContainer = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  img {
    margin-bottom: -1rem;
  }
`

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  position: relative;
  padding: 2rem;

  background: ${(props) => props.theme.background};
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 6px 44px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  }
`
export const InformationItem = styled.div<InformationItemProps>`
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
export const Title = styled.div`
  margin-bottom: 2rem;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`
