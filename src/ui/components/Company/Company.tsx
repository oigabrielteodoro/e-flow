import React, { ElementType, useState } from 'react'

import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { pipe } from 'fp-ts/function'
import { map, mapLeft } from 'fp-ts/Either'

import { ShimmerEffect } from 'ui'
import { api, normalizeCompany } from 'client'
import { CompanyNormalized, CompanyRaw, companyRawCodec } from 'types'
import { ICON_DOWN_PRICING, ICON_STAR_OUTLINE, ICON_UP_PRICING } from 'assets'

import * as S from './Company.styled'

type Props = {
  symbol: string
  disableFavorite?: boolean
  as?: ElementType
}

export function Company({ symbol, as, disableFavorite = false }: Props) {
  const [company, setCompany] = useState<CompanyNormalized>()

  const logo_url = `https://storage.googleapis.com/iex/api/logos/${symbol}.png`

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

  const isPricingUp = company?.price_direction === 'up'

  return (
    <S.Container as={as} isPricingUp={isPricingUp}>
      {!disableFavorite && (
        <button>
          <img src={ICON_STAR_OUTLINE} alt='Icon Star' />
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
