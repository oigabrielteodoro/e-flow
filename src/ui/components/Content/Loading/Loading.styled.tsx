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
    margin-top: 2rem;
    font-weight: ${theme.font.weights.medium};
    color: ${theme.colors.gray[500]};
  }

  small {
    max-width: 30rem;
    text-align: center;
    margin-top: 0.8rem;
    color: ${theme.colors.gray[500]};
  }

  img {
    animation: ${rotate} 1s infinite;
  }
`
