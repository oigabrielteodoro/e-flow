import React, { ElementType, useState } from 'react'

import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { pipe } from 'fp-ts/function'
import { map, mapLeft } from 'fp-ts/Either'

import { ShimmerEffect } from 'ui'
import { CompanyNormalized, CompanyRaw, companyRawCodec } from 'types'

import {
  api,
  ApplicationState,
  normalizeCompany,
  addFavoriteCompany,
} from 'client'

import {
  ICON_DOWN_PRICING,
  ICON_STAR,
  ICON_STAR_OUTLINE,
  ICON_UP_PRICING,
} from 'assets'

import * as S from './Company.styled'

type Props = {
  symbol: string
  disableFavorite?: boolean
  as?: ElementType
}

export function Company({ symbol, as, disableFavorite = false }: Props) {
  const logo_url = `https://storage.googleapis.com/iex/api/logos/${symbol}.png`

  const dispatch = useDispatch()
  const [company, setCompany] = useState<CompanyNormalized>()

  const favorites = useSelector<ApplicationState, string[]>(
    (state) => state.companies.favorites,
  )

  const { isLoading } = useQuery<CompanyRaw>({
    queryKey: `/stock/${symbol}/quote`,
    queryFn: () =>
      api.get(`/stock/${symbol}/quote`).then((response) => response.data),
    onSuccess: (data) =>
      pipe(
        data,
        companyRawCodec.decode,
        map((data) => {
          setCompany(normalizeCompany(data))
        }),
        mapLeft(() => {
          toast.error('Os dados devoldidos da api estão inválidos!')
        }),
      ),
  })

  const isFavorite = favorites.includes(symbol)
  const isPricingUp = company?.price_direction === 'up'

  function handleFavorite() {
    if (isFavorite) return

    dispatch(addFavoriteCompany(symbol))
  }

  return (
    <S.Container as={as} isPricingUp={isPricingUp}>
      {!disableFavorite && (
        <button onClick={handleFavorite}>
          <img
            src={isFavorite ? ICON_STAR : ICON_STAR_OUTLINE}
            alt='Icon Star'
          />
        </button>
      )}

      <img className='logo' src={logo_url} alt={symbol} />

      <section>
        <ShimmerEffect isLoading={isLoading} width='3rem' height='1rem'>
          <span>{company?.symbol}</span>
        </ShimmerEffect>
        <ShimmerEffect isLoading={isLoading} width='6rem' height='1rem'>
          <span>{company?.company_name.split(' ')[0]}</span>
        </ShimmerEffect>
      </section>

      <div className='pricing'>
        <strong>{company?.change_percent}</strong>
        <img
          src={isPricingUp ? ICON_UP_PRICING : ICON_DOWN_PRICING}
          alt='Icon Pricing'
        />
      </div>
    </S.Container>
  )
}
