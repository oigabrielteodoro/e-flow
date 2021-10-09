import React, { useCallback, useRef } from 'react'

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
  const companiesList = useRef<HTMLUListElement>(null)

  const handleNextScroll = useCallback(() => {
    const scrollLeft = companiesList.current?.scrollLeft ?? 0
    const clientWidth = companiesList.current?.clientWidth ?? 0

    const left = scrollLeft + clientWidth

    companiesList.current?.scrollTo({
      left,
      behavior: 'smooth',
    })
  }, [])

  const handlePreviuosScroll = useCallback(() => {
    const scrollLeft = companiesList.current?.scrollLeft ?? 0
    const clientWidth = companiesList.current?.clientWidth ?? 0

    const left = scrollLeft - clientWidth

    companiesList.current?.scrollTo({
      left,
      behavior: 'smooth',
    })
  }, [])

  return (
    <S.Container>
      <S.Header>
        <section>
          <img src={ICON_COMPANY} alt='Icon Company' />
          <h1>Empresas recentes</h1>
        </section>
        <nav>
          <button onClick={handlePreviuosScroll}>
            <img src={ICON_ARROW_LEFT} alt='Icon Arrow Left' />
          </button>
          <button onClick={handleNextScroll}>
            <img src={ICON_ARROW_RIGHT} alt='Icon Arrow Right' />
          </button>
        </nav>
      </S.Header>
      <S.CompaniesList ref={companiesList}>
        <li>
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
        </li>
      </S.CompaniesList>
    </S.Container>
  )
}
