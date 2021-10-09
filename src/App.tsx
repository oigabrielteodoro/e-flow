import React from 'react'

import { GlobalStyle, Sidebar } from 'ui'

import * as S from './App.styled'

export function App() {
  return (
    <>
      <S.Container>
        <Sidebar />
        <main>
          <h1>Dashboard</h1>
        </main>
      </S.Container>
      <GlobalStyle />
    </>
  )
}
