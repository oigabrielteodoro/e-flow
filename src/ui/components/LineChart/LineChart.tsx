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

import { theme, Dot, Tooltip } from 'ui'

export function LineChart() {
  return (
    <ComposedChart height={274} width={702} data={data} margin={{ top: 30 }}>
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
        dataKey='hour'
        tick={{ color: theme.colors.gray[500], fontSize: 11 }}
        tickMargin={10}
        tickLine={false}
        axisLine={false}
        textAnchor='left'
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
        dot={Dot}
        activeDot={(props) => <Dot active {...props} />}
      />
    </ComposedChart>
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
