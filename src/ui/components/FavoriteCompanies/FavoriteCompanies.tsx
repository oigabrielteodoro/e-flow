import React from 'react'

import { ICON_CARET_DOWN, ICON_STAR } from 'assets'

import * as S from './FavoriteCompanies.styled'

export function FavoriteCompanies() {
  return (
    <S.Container>
      <header>
        <img
          className='avatar'
          src='https://github.com/oigabrielteodoro.png'
          alt='Gabriel Teodoro'
        />
        <span>José Gabriel Cavalcante Teodoro</span>

        <button>
          <img src={ICON_CARET_DOWN} alt='Icon Caret Down' />
        </button>
      </header>

      <S.CompaniesArea>
        <h1>
          <img src={ICON_STAR} alt='Icon Star' />
          Empresas favoritas
        </h1>

        <ul>
          <li>Facebook</li>
        </ul>
      </S.CompaniesArea>
    </S.Container>
  )
}
