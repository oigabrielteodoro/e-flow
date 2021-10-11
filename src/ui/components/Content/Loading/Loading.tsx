import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

import { theme } from 'ui'

import * as S from './Loading.styled'

export function Loading() {
  return (
    <S.Container>
      <AiOutlineLoading size={30} color={theme.colors.gray[500]} />
      <strong>Carregando dados...</strong>
      <small>
        Caso esse processo esteja demorando, verifique a sua conexão com a
        internet!
      </small>
    </S.Container>
  )
}
