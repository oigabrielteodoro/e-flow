import React from 'react'
import {
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from 'recharts'

import {
  ICON_DASHBOARD,
  ICON_SEARCH,
  ICON_STAR,
  ICON_DOWN_PRICING,
} from 'assets'

import { theme } from 'ui'

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
              <img src={ICON_STAR} alt='Icon Star' />
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

          <ComposedChart
            height={215}
            width={702}
            data={data}
            margin={{ top: 30 }}
          >
            <defs>
              <linearGradient id='gradient' x1='100%' y1='0%' x2='0%' y2='100%'>
                <stop
                  offset='40%'
                  stopColor={theme.colors.blue[500]}
                  stopOpacity={0.1}
                />
                <stop
                  offset='80%'
                  stopColor={theme.colors.white}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke={theme.colors.gray[50]} />
            <YAxis
              tick={{ color: theme.colors.gray[500], fontSize: 11 }}
              tickMargin={6}
              tickFormatter={(value) => `$${value}`}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey='hour'
              tick={{ color: theme.colors.gray[500], fontSize: 11 }}
              tickMargin={10}
              tickLine={false}
              axisLine={false}
              textAnchor='left'
            />
            <Tooltip />
            <Line
              type='monotone'
              dataKey='pricing'
              stroke={theme.colors.blue[500]}
            />
            <Area
              type='monotone'
              dataKey='pricing'
              strokeWidth={2}
              fillOpacity={1}
              fill='url(#gradient)'
            />
          </ComposedChart>
        </S.AnalyticsArea>
      </S.Container>
    </S.Wrapper>
  )
}

const data = [
  {
    pricing: 0,
    hour: '09:00',
  },
  {
    pricing: 600,
    hour: '10:00',
  },
  {
    pricing: 900,
    hour: '10:30',
  },
  {
    pricing: 800,
    hour: '11:00',
  },
  {
    pricing: 900,
    hour: '12:00',
  },
  {
    pricing: 0,
    hour: '13:00',
  },
  {
    pricing: 210,
    hour: '14:00',
  },
  {
    pricing: 150,
    hour: '15:00',
  },
  {
    pricing: 300,
    hour: '16:30',
  },
  {
    pricing: 220,
    hour: '17:00',
  },
]
