import styled, { keyframes } from 'styled-components'
import { theme } from 'ui/styles'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30.4rem;

  strong {
    margin-top: 3rem;
    font-weight: 500;
    color: ${theme.colors.gray[500]};
  }

  small {
    max-width: 30rem;
    text-align: center;
    margin-top: 0.8rem;
    color: ${theme.colors.gray[500]};
  }

  svg {
    animation: ${rotate} 1s infinite;
  }
`
