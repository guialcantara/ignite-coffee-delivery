import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.5rem;

  img {
    margin-top: -2rem;
  }

  h3 {
    font-family: 'baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  .labels {
    display: flex;
    gap: 0.5rem;
  }
`

export const Label = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 9999px;

  font-size: 0.75rem;
  font-weight: bold;
`

export const CartButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  padding: 0.5rem;
  border-radius: 8px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  p {
    font-size: 1.5rem;
    font-family: 'baloo 2', sans-serif;
    font-weight: 800;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      margin-right: 0.25rem;
    }
  }
`
