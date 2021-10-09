import React from 'react'

import { GlobalStyle, Sidebar, Content } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <S.Container>
        <Sidebar />
        <Content />
      </S.Container>
      <GlobalStyle />
    </>
  )
}
