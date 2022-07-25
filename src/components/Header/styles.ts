import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  padding: 2rem;

  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.background};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Location = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  padding: 0.5rem;
  border-radius: 8px;

  & svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButtonContainer = styled.button`
  position: relative;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  padding: 0.5rem;
  border: none;
  border-radius: 8px;
`

export const CartCounter = styled.span`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  border-radius: 9999px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  font-size: 0.75rem;
  font-weight: bold;
`
