import { StockResult } from '@/types/stock'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { CartesianChart, Line } from 'victory-native'

interface MiniGraphProps {
  containerStyle?: StyleProp<ViewStyle>
  data: StockResult[]
  increased: boolean
}

export function MiniGraph({ containerStyle, data, increased }: MiniGraphProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <CartesianChart<
        Record<keyof StockResult, number>,
        'timestamp',
        'openPrice'
      >
        yKeys={['openPrice']}
        data={data}
        xKey={'timestamp'}
      >
        {({ points }) => (
          <Line
            points={points.openPrice}
            color={increased ? 'green' : 'red'}
            strokeWidth={2}
          />
        )}
      </CartesianChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
  },
})
