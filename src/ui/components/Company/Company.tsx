import React, { ElementType } from 'react'

import { ShimmerEffect } from 'ui'

import {
  ICON_DOWN_PRICING,
  ICON_STAR,
  ICON_STAR_OUTLINE,
  ICON_UP_PRICING,
} from 'assets'

import { useCompany } from './useCompany'

import * as S from './Company.styled'

type Props = {
  symbol: string
  disableFavorite?: boolean
  as?: ElementType
}

export function Company({ symbol, as, disableFavorite = false }: Props) {
  const {
    company,
    logo_url,
    isLoading,
    isFavorite,
    isPricingUp,
    favoriteCompany,
    inspectCompany,
  } = useCompany(symbol)

  return (
    <S.Container as={as} isPricingUp={isPricingUp}>
      {!disableFavorite && (
        <button onClick={favoriteCompany}>
          <img
            src={isFavorite ? ICON_STAR : ICON_STAR_OUTLINE}
            alt={isFavorite ? 'Icon Star' : 'Icon Star Outline'}
          />
        </button>
      )}

      <img
        className='logo'
        src={logo_url}
        alt={symbol}
        onClick={inspectCompany}
      />

      <section onClick={inspectCompany}>
        <ShimmerEffect isLoading={isLoading} width='3rem' height='1rem'>
          <span>{company?.symbol}</span>
        </ShimmerEffect>
        <ShimmerEffect isLoading={isLoading} width='6rem' height='1rem'>
          <span>{company?.company_name.split(' ')[0]}</span>
        </ShimmerEffect>
      </section>

      <div className='pricing' onClick={inspectCompany}>
        <strong>{company?.change_percent}</strong>
        <img
          src={isPricingUp ? ICON_UP_PRICING : ICON_DOWN_PRICING}
          alt='Icon Pricing'
        />
      </div>
    </S.Container>
  )
}
