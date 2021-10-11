import React from 'react'

import '@brainhubeu/react-carousel/lib/style.css'

import { GlobalStyle, Sidebar, Content, FavoriteCompanies } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <S.Container>
        <Sidebar />
        <Content />
        <FavoriteCompanies />
      </S.Container>
      <GlobalStyle />
    </>
  )
}
