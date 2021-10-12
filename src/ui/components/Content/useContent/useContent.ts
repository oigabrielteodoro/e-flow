import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { isSome } from 'fp-ts/Option'

import {
  api,
  ApplicationState,
  CompaniesState,
  normalizeCompanyPrice,
} from 'client'

import {
  CompanyHistoryPriceNormalized,
  companyHistoryPriceRaw,
  CompanyHistoryPriceRaw,
} from 'types'

export function useContent() {
  const { company } = useSelector<ApplicationState, CompaniesState>(
    (state) => state.companies,
  )

  const [history, setHistory] = useState<CompanyHistoryPriceNormalized>([])

  const symbol = isSome(company) ? company.value.symbol : ''

  const { data, isLoading } = useQuery({
    queryKey: `/stock/${symbol}/chart`,
    queryFn: () =>
      api
        .get<CompanyHistoryPriceRaw>(`/stock/${symbol}/chart`)
        .then((response) => response.data),
  })

  useEffect(() => {
    if (data) {
      pipe(
        data,
        companyHistoryPriceRaw.decode,
        map(() => {
          setHistory(data.map(normalizeCompanyPrice))
        }),
        mapLeft(() => {
          toast.error('Os dados devolvidos da requisição estão inválidos!')
        }),
      )
    }
  }, [data])

  return {
    history,
    isLoading,
  }
}
