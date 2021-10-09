import React from 'react'
import { theme } from 'ui/styles'

type Props = {
  cx: number
  cy: number
  active?: boolean
}

export function Dot({ cx, cy, active = false }: Props) {
  if (active) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='20'
        viewBox='0 0 19 20'
        fill='none'
        y={cy - 10}
        x={cx - 10}
      >
        <path
          d='M17.7283 10.2728C17.7283 14.9362 13.9786 18.7035 9.36917 18.7035C4.75969 18.7035 1.01001 14.9362 1.01001 10.2728C1.01001 5.60951 4.75969 1.84216 9.36917 1.84216C13.9786 1.84216 17.7283 5.60951 17.7283 10.2728Z'
          fill='white'
          stroke={theme.colors.blue[500]}
          strokeWidth='2'
        />
        <ellipse
          xmlns='http://www.w3.org/2000/svg'
          cx='9.36874'
          cy='10.2728'
          rx='3.11972'
          ry='3.14356'
          fill={theme.colors.blue[500]}
        />
      </svg>
    )
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={3}
      strokeWidth={3}
      fill={theme.colors.blue[500]}
    />
  )
}
