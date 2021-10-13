import React, { ReactNode } from 'react'

import * as S from './Tooltip.styled'

type Props = {
  title: string
  children?: ReactNode
  variant?: 'default' | 'chart'
}

export function Tooltip({ variant = 'default', title, children }: Props) {
  return (
    <S.Container variant={variant}>
      <span>{title}</span>
      {children}
    </S.Container>
  )
}
