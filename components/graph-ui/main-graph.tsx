import { useThemeColor } from '@/hooks/useThemeColor'
import { StockResult } from '@/types/stock'
import { getHeightByRatio, getWidthByRatio } from '@/utils/common'
import { Line, Rect } from '@shopify/react-native-skia'
import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { CartesianChart } from 'victory-native'

interface MainGraphProps {
  containerStyle?: StyleProp<ViewStyle>
  data: StockResult[]
  increased: boolean
}

export function MainGraph({ containerStyle, data, increased }: MainGraphProps) {
  const overlay = useThemeColor({ colorName: 'divider' })
  return (
    <View style={[styles.container, containerStyle]}>
      <CartesianChart<
        Record<keyof StockResult, number>,
        'timestamp',
        keyof StockResult
      >
        yKeys={['openPrice', 'closePrice', 'highPrice', 'lowPrice']}
        data={data}
        xKey={'timestamp'}
        axisOptions={{
          formatXLabel: (label) => {
            return label.toString()
          },
          labelColor: overlay,
          lineColor: {
            frame: overlay,
            grid: {
              x: overlay,
              y: overlay,
            },
          },
          lineWidth: {
            frame: 1,
            grid: {
              x: 1,
              y: 1,
            },
          },
        }}
      >
        {({ points }) => (
          <>
            {data.map((d, i) => {
              const x = points.openPrice[i].x
              const openY = points.openPrice[i].y || 0
              const closeY = points.closePrice[i].y || 0
              const highY = points.highPrice[i].y || 0
              const lowY = points.lowPrice[i].y || 0

              // Candle body properties
              const candleWidth = 10
              const isUp = d.closePrice > d.openPrice
              const color = isUp ? '#4caf50' : '#f44336'
              const bodyY = isUp ? closeY : openY
              const bodyHeight = Math.abs(openY - closeY)

              return (
                <React.Fragment key={i}>
                  <Line
                    p1={{ x, y: highY }}
                    p2={{ x, y: lowY }}
                    color={color}
                    strokeWidth={2}
                  />
                  <Rect
                    x={x - candleWidth / 2}
                    y={bodyY}
                    width={candleWidth}
                    height={bodyHeight === 0 ? 2 : bodyHeight}
                    color={color}
                  />
                </React.Fragment>
              )
            })}
          </>
        )}
      </CartesianChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: getHeightByRatio(0.5),
    width: getWidthByRatio(1),
  },
})
