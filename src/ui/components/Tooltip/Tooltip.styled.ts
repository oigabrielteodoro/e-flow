import styled, { css } from 'styled-components'
import { theme } from 'ui/styles'

type ContainerProps = {
  variant: 'default' | 'chart'
}

const modifiers = {
  default: css`
    opacity: 0;
    visibility: hidden;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(-100% + -1.7rem);
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 0.9rem 0.9rem 0 0.9rem;
      border-color: ${theme.colors.blue[500]} transparent transparent
        transparent;
      left: 50%;
      transform: translateX(-50%);
      bottom: -0.9rem;
    }
  `,
  chart: css``,
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  > span {
    color: ${theme.colors.white};
    background: ${theme.colors.blue[500]};
    border-radius: 0.4rem;
    padding: 0.5rem 1.2rem;
    white-space: nowrap;
    transition: all 0.5s;

    ${({ variant }) => modifiers[variant]}
  }
`
