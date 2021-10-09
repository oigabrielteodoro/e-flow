import React, { ReactNode } from 'react'

import * as S from './Tooltip.styled'

type Props = {
  title: string
  children?: ReactNode
}

export function Tooltip({ title, children }: Props) {
  return (
    <S.Container>
      <span>{title}</span>
      {children}
    </S.Container>
  )
}
