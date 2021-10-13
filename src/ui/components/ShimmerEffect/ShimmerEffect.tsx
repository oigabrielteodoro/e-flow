import React, { ReactNode } from 'react'

import * as S from './ShimmerEffect.styled'

export type ShimmerEffectProps = {
  isLoading?: boolean
  children?: ReactNode
  height?: string
  width?: string
  color?: string
}

export function ShimmerEffect({
  isLoading = true,
  children,
  height = '2rem',
  width = '100%',
  color = '#fff',
}: ShimmerEffectProps) {
  if (isLoading) {
    return <S.Container height={height} width={width} color={color} />
  }

  return <>{children}</>
}
