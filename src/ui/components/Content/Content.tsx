import React from 'react'

import {
  ICON_DASHBOARD,
  ICON_SEARCH,
  ICON_STAR,
  ICON_DOWN_PRICING,
} from 'assets'

import { Tooltip, LineChart } from 'ui'

import * as S from './Content.styled'

export function Content() {
  return (
    <S.Wrapper>
      <header>
        <img src={ICON_DASHBOARD} alt='Icon Dashboard' />
        <h1>Dashboard</h1>
      </header>

      <S.Container>
        <S.SearchArea>
          <input placeholder='Buscar empresa' />
          <button>
            <img src={ICON_SEARCH} alt='Icon Search' />
          </button>
        </S.SearchArea>
        <S.AnalyticsArea>
          <S.AnalyticsAssetArea>
            <S.AssetInfo>
              <Tooltip title='Adicionar aos favoritos'>
                <img src={ICON_STAR} alt='Icon Star' />
              </Tooltip>
              <fieldset>
                <strong>MSFT</strong>
                <span>Microsoft</span>
              </fieldset>
            </S.AssetInfo>
            <S.AssetPricing>
              <div>
                <img src={ICON_DOWN_PRICING} alt='Icon Down Pricing' />
                <strong>$265,42</strong>
              </div>
              <span>$-0.09 (-0.03%)</span>
            </S.AssetPricing>
          </S.AnalyticsAssetArea>

          <LineChart />
        </S.AnalyticsArea>
      </S.Container>
    </S.Wrapper>
  )
}
