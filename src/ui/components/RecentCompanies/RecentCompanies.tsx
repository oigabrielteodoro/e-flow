import React, { useCallback, useState } from 'react'

import { ICON_COMPANY, ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from 'assets'

import { Company } from 'ui'

import * as S from './RecentCompanies.styled'

export function RecentCompanies() {
  const [page, setPage] = useState(0)

  const handleNext = useCallback(() => {
    setPage((prevState) => prevState + 1)
  }, [])

  const handlePrevious = useCallback(() => {
    if (page > 0) {
      setPage((prevState) => prevState - 1)
    }
  }, [page])

  return (
    <S.Container>
      <S.Header>
        <section>
          <img src={ICON_COMPANY} alt='Icon Company' />
          <h1>Empresas recentes</h1>
        </section>
        <nav>
          <button onClick={handlePrevious}>
            <img src={ICON_ARROW_LEFT} alt='Icon Arrow Left' />
          </button>
          <button onClick={handleNext}>
            <img src={ICON_ARROW_RIGHT} alt='Icon Arrow Right' />
          </button>
        </nav>
      </S.Header>
      <S.CompaniesList
        value={page}
        onChange={(value) => setPage(value)}
        itemWidth={338.3}
      >
        <Company as='li' />
        <Company as='li' />
        <Company as='li' />
        <Company as='li' />
      </S.CompaniesList>
    </S.Container>
  )
}
