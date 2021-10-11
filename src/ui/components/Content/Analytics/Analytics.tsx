import React from 'react'

import { ICON_DOWN_PRICING, ICON_STAR_OUTLINE } from 'assets'

import { Tooltip } from 'ui'

import { LineChart } from '../LineChart'

import * as S from './Analytics.styled'

export function Analytics() {
  return (
    <S.Container>
      <S.AnalyticsAssetArea>
        <S.AssetInfo>
          <Tooltip title='Adicionar aos favoritos'>
            <button>
              <img src={ICON_STAR_OUTLINE} alt='Icon Star' />
            </button>
          </Tooltip>
          <section>
            <strong>MSFT</strong>
            <span>Microsoft</span>
          </section>
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
    </S.Container>
  )
}
