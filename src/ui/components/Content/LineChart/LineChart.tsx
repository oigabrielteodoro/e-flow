import React from 'react'
import {
  CartesianGrid,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  Area,
  Line,
} from 'recharts'

import { v4 } from 'uuid'

import { theme, Tooltip } from 'ui'

import { Dot } from '../Dot'
import { Loading } from '../Loading'
import { useContent } from '../useContent'

export default function LineChart() {
  const { history, isLoading } = useContent()

  if (isLoading) {
    return <Loading />
  }

  return (
    <ComposedChart height={304} width={865} data={history} margin={{ top: 30 }}>
      <defs>
        <linearGradient id='gradient' x1='100%' y1='0%' x2='0%' y2='100%'>
          <stop
            offset='40%'
            stopColor={theme.colors.blue[500]}
            stopOpacity={0.1}
          />
          <stop offset='80%' stopColor={theme.colors.white} stopOpacity={0.1} />
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
        dataKey='updated_at'
        tick={{ color: theme.colors.gray[500], fontSize: 11 }}
        tickMargin={10}
        tickLine={false}
        axisLine={false}
      />
      <RechartTooltip
        content={({ payload, active }) => {
          if (active && payload && payload.length) {
            return (
              <Tooltip
                variant='chart'
                title={`$${payload[0].value?.toString()}`}
              />
            )
          }

          return null
        }}
      />
      <Line type='monotone' dataKey='pricing' stroke={theme.colors.blue[500]} />
      <Area
        type='monotone'
        dataKey='pricing'
        strokeWidth={2}
        fillOpacity={1}
        fill='url(#gradient)'
        dot={(props) => <Dot {...props} key={v4()} />}
        activeDot={(props) => <Dot active {...props} />}
      />
    </ComposedChart>
  )
}
