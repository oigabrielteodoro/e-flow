import React, { useCallback, useRef } from 'react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import { useSelector } from 'react-redux'

import { ICON_COMPANY, ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from 'assets'

import { Company } from 'ui'
import { ApplicationState } from 'client'
import { CompanyNormalized } from 'types'

import * as S from './RecentCompanies.styled'

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
  },
}

export function RecentCompanies() {
  const page = useRef<number>(0)
  const companiesList = useRef<Carousel>(null)

  const companies = useSelector<ApplicationState, CompanyNormalized[]>(
    (state) => state.companies.storaged,
  )

  const handleNext = useCallback(() => {
    companiesList.current?.next(page.current + 1)
    page.current += 1
  }, [])

  const handlePrevious = useCallback(() => {
    if (page.current <= 0) return

    companiesList.current?.previous(page.current - 1)
    page.current -= 1
  }, [])

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
        ref={companiesList}
        arrows={false}
        responsive={responsive}
        deviceType='desktop'
        additionalTransfrom={-16}
        ssr
      >
        {companies.map((company) => (
          <Company key={company.symbol} symbol={company.symbol} />
        ))}
      </S.CompaniesList>
    </S.Container>
  )
}
