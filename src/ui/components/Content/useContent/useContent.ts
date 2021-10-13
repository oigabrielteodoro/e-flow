import { useState } from 'react'

import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import { pipe } from 'fp-ts/function'
import { isSome } from 'fp-ts/Option'
import { map, mapLeft } from 'fp-ts/Either'

import {
  api,
  ApplicationState,
  CompaniesState,
  normalizeCompanyPrice,
} from 'client'

import {
  CompanyPriceHistoryNormalized,
  companyPriceHistoryRaw,
  CompanyPriceHistoryRaw,
} from 'types'

export function useContent() {
  const { company } = useSelector<ApplicationState, CompaniesState>(
    (state) => state.companies,
  )

  const [history, setHistory] = useState<CompanyPriceHistoryNormalized>([])

  const symbol = isSome(company) ? company.value.symbol : ''

  const { isLoading } = useQuery({
    queryKey: `/stock/${symbol}/chart`,
    queryFn: () =>
      api
        .get<CompanyPriceHistoryRaw>('/chart', {
          params: { symbol },
        })
        .then((response) => response.data),
    onSuccess: (data) =>
      pipe(
        data,
        companyPriceHistoryRaw.decode,
        map(() => {
          setHistory(data.map(normalizeCompanyPrice))
        }),
        mapLeft(() => {
          toast.error(
            'Os dados recebidos estão inválidos! Tente novamente mais tarde...',
          )
        }),
      ),
  })

  return {
    history,
    isLoading,
  }
}
