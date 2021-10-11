import React, { FormEvent, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { ICON_DASHBOARD, ICON_SEARCH } from 'assets'

import { RecentCompanies } from 'ui'
import { getCompanyRequest } from 'client'

import { Analytics } from './Analytics'

import * as S from './Content.styled'

export function Content() {
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { value } = event.currentTarget[0] as HTMLInputElement

      dispatch(getCompanyRequest(value))
    },
    [dispatch],
  )

  return (
    <S.Wrapper>
      <header>
        <img src={ICON_DASHBOARD} alt='Icon Dashboard' />
        <h1>Dashboard</h1>
      </header>

      <S.Container>
        <S.SearchArea onSubmit={handleSubmit}>
          <input placeholder='Buscar empresa' />
          <button type='submit'>
            <img src={ICON_SEARCH} alt='Icon Search' />
          </button>
        </S.SearchArea>
        <Analytics />

        <RecentCompanies />
      </S.Container>
    </S.Wrapper>
  )
}
