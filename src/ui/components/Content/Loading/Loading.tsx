import React from 'react'

import { ICON_LOADING } from 'assets'

import * as S from './Loading.styled'

export function Loading() {
  return (
    <S.Container>
      <img src={ICON_LOADING} alt='Icon Loading' width={50} height={50} />
      <strong>Carregando dados...</strong>
      <small>
        Caso esse processo esteja demorando, verifique a sua conexão com a
        internet!
      </small>
    </S.Container>
  )
}
