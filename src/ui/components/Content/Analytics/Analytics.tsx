import React from 'react'
import dynamic from 'next/dynamic'

import { isSome } from 'fp-ts/Option'

import { useSelector } from 'react-redux'

import { Tooltip } from 'ui'
import { ApplicationState, CompaniesState } from 'client'
import { ICON_DOWN_PRICING, ICON_STAR_OUTLINE, ICON_UP_PRICING } from 'assets'

import * as S from './Analytics.styled'

const LineChart = dynamic(() => import('../LineChart'), { ssr: false })

export function Analytics() {
  const { company } = useSelector<ApplicationState, CompaniesState>(
    (state) => state.companies,
  )

  if (!isSome(company)) {
    return null
  }

  const isPricingUp = company.value.price_direction === 'up'

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
            <strong>{company.value.symbol}</strong>
            <span>{company.value.company_name}</span>
          </section>
        </S.AssetInfo>
        <S.AssetPricing isUp={isPricingUp}>
          <div>
            <img
              src={isPricingUp ? ICON_UP_PRICING : ICON_DOWN_PRICING}
              alt='Icon Pricing'
            />
            <strong>{company.value.latest_price}</strong>
          </div>
          <span>
            {company.value.change} ({company.value.change_percent})
          </span>
        </S.AssetPricing>
      </S.AnalyticsAssetArea>

      <LineChart />
    </S.Container>
  )
}
