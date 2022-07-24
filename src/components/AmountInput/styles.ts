import styled from 'styled-components'

export const AmountInputContainer = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['base-button']};
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;

  svg {
    color: ${(props) => props.theme.purple};
  }

  svg:hover {
    cursor: pointer;
  }
`
