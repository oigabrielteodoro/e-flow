import { useState } from 'react'

import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { pipe } from 'fp-ts/function'
import { map, mapLeft } from 'fp-ts/Either'

import { CompanyNormalized, CompanyRaw, companyRawCodec } from 'types'

import {
  api,
  ApplicationState,
  normalizeCompany,
  addFavoriteCompany,
  getCompanyRequest,
} from 'client'

export function useCompany(symbol: string) {
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
          toast.error(
            'Os dados recebidos estão inválidos! Tente novamente mais tarde...',
          )
        }),
      ),
  })

  const isFavorite = favorites.includes(symbol)
  const isPricingUp = company?.price_direction === 'up'

  function favoriteCompany() {
    if (isFavorite) return

    dispatch(addFavoriteCompany(symbol))
  }

  function inspectCompany() {
    dispatch(getCompanyRequest(symbol))
  }

  return {
    company,
    logo_url,
    isLoading,
    isFavorite,
    isPricingUp,
    favoriteCompany,
    inspectCompany,
  }
}
