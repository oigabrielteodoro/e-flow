import React from 'react'

import { ICON_CARET_DOWN } from 'assets'

import * as S from './FavoriteCompanies.styled'

export function FavoriteCompanies() {
  return (
    <S.Container>
      <header>
        <img
          src='https://github.com/oigabrielteodoro.png'
          alt='Gabriel Teodoro'
        />
        <span>Gabriel Teodoro</span>
        <img src={ICON_CARET_DOWN} alt='Icon Caret Down' />
      </header>
    </S.Container>
  )
}
