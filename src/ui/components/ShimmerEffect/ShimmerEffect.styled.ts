import styled, { keyframes, css } from 'styled-components'
import { darken, lighten } from 'polished'

import { ShimmerEffectProps } from '.'

type ContainerProps = Required<
  Pick<ShimmerEffectProps, 'height' | 'width' | 'color'>
>

const progress = keyframes`
  from {
      background-position: -30rem 0;
  }

  to {
      background-position: calc(30rem + 100%) 0;
  }
`

export const Container = styled.div<ContainerProps>`
  animation: ${progress} 1.2s ease-in-out infinite;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    ${({ color }) => lighten(1, color)},
    rgba(0, 0, 0, 0)
  );
  background-color: ${({ color }) => darken(0.3, color)};
  background-size: 20rem 100%;
  background-repeat: no-repeat;
  border-radius: 0.313rem;
  display: inline-block;
  line-height: 1;
  opacity: 0.1;

  ${({ height, width }) => css`
    width: ${width};
    height: ${height};
  `}
`
