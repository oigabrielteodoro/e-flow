import React from 'react'
import dynamic from 'next/dynamic'

import { isSome } from 'fp-ts/Option'

import { useDispatch, useSelector } from 'react-redux'

import { Tooltip, ShimmerEffect } from 'ui'
import { addFavoriteCompany, ApplicationState, CompaniesState } from 'client'
import {
  ICON_DOWN_PRICING,
  ICON_STAR,
  ICON_STAR_OUTLINE,
  ICON_UP_PRICING,
} from 'assets'

import * as S from './Analytics.styled'

const LineChart = dynamic(() => import('../LineChart'), { ssr: false })

export function Analytics() {
  const dispatch = useDispatch()
  const { company, loading, favorites } = useSelector<
    ApplicationState,
    CompaniesState
  >((state) => state.companies)

  if (!isSome(company)) {
    return null
  }

  const isFavorite = favorites.includes(company.value.symbol)
  const isPricingUp = company.value.price_direction === 'up'

  function handleFavorite() {
    if (isFavorite || !isSome(company)) return

    dispatch(addFavoriteCompany(company.value.symbol))
  }

  return (
    <S.Container>
      <S.AnalyticsAssetArea>
        <S.AssetInfo>
          <ShimmerEffect width='10rem' isLoading={loading}>
            <Tooltip
              title={
                isFavorite
                  ? 'Já está nos seus favoritos!'
                  : 'Adicionar aos favoritos'
              }
            >
              <button onClick={handleFavorite} aria-label='favorite button'>
                <img
                  src={isFavorite ? ICON_STAR : ICON_STAR_OUTLINE}
                  alt={isFavorite ? 'Icon Star' : 'Icon Star Outline'}
                  aria-label={isFavorite ? 'icon star' : 'icon star outline'}
                />
              </button>
            </Tooltip>
            <section>
              <strong>{company.value.symbol}</strong>
              <span>{company.value.company_name}</span>
            </section>
          </ShimmerEffect>
        </S.AssetInfo>
        <S.AssetPricing isUp={isPricingUp}>
          <ShimmerEffect width='10rem' isLoading={loading}>
            <div>
              <img
                src={isPricingUp ? ICON_UP_PRICING : ICON_DOWN_PRICING}
                alt='Icon Pricing'
              />
              <strong>{company.value.latest_price}</strong>
            </div>
          </ShimmerEffect>
          <ShimmerEffect width='15rem' isLoading={loading}>
            <span>
              {company.value.change} ({company.value.change_percent})
            </span>
          </ShimmerEffect>
        </S.AssetPricing>
      </S.AnalyticsAssetArea>

      <LineChart />
    </S.Container>
  )
}
