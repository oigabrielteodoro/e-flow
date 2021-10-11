import React, { useCallback, useState } from 'react'

import {
  ICON_STAR,
  ICON_COMPANY,
  ICON_ARROW_LEFT,
  ICON_ARROW_RIGHT,
  LOGO_FACEBOOK,
  ICON_UP_PRICING,
} from 'assets'

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
        <S.CompanyItem>
          <button>
            <img src={ICON_STAR} alt='Icon Star' />
          </button>

          <img className='logo' src={LOGO_FACEBOOK} alt='Facebook' />

          <section>
            <span>FB</span>
            <span>Facebook</span>
          </section>

          <div className='pricing'>
            <strong className='up'>+2.3%</strong>
            <img src={ICON_UP_PRICING} alt='Icon Up Pricing' />
          </div>
        </S.CompanyItem>
        <S.CompanyItem>
          <button>
            <img src={ICON_STAR} alt='Icon Star' />
          </button>

          <img className='logo' src={LOGO_FACEBOOK} alt='Facebook' />

          <section>
            <span>FB</span>
            <span>Facebook</span>
          </section>

          <div className='pricing'>
            <strong className='up'>+2.3%</strong>
            <img src={ICON_UP_PRICING} alt='Icon Up Pricing' />
          </div>
        </S.CompanyItem>
        <S.CompanyItem>
          <button>
            <img src={ICON_STAR} alt='Icon Star' />
          </button>

          <img className='logo' src={LOGO_FACEBOOK} alt='Facebook' />

          <section>
            <span>FB</span>
            <span>Facebook</span>
          </section>

          <div className='pricing'>
            <strong className='up'>+2.3%</strong>
            <img src={ICON_UP_PRICING} alt='Icon Up Pricing' />
          </div>
        </S.CompanyItem>
        <S.CompanyItem>
          <button>
            <img src={ICON_STAR} alt='Icon Star' />
          </button>

          <img className='logo' src={LOGO_FACEBOOK} alt='Facebook' />

          <section>
            <span>FB</span>
            <span>Facebook</span>
          </section>

          <div className='pricing'>
            <strong className='up'>+2.3%</strong>
            <img src={ICON_UP_PRICING} alt='Icon Up Pricing' />
          </div>
        </S.CompanyItem>
      </S.CompaniesList>
    </S.Container>
  )
}
