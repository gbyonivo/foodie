import { Stock } from '@/types/stock'
import { calculatePercentageChange } from '@/utils/stock-helper'
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { ThemedText } from '../common/ThemedText'
import { MiniGraph } from './mini-graph'

interface StockListProps {
  stocks: Stock[]
  containerStyle?: StyleProp<ViewStyle>
}

export function StockList({ stocks, containerStyle }: StockListProps) {
  const renderStock = ({ item }: { item: Stock }) => {
    const index = 0 // item.results.length - 1
    const percentage = calculatePercentageChange(
      item.results[index].closePrice - item.results[index].openPrice,
      item.results[index].closePrice,
    )
    const increased =
      item.results[index].closePrice > item.results[index].openPrice
    return (
      <View key={item.symbol} style={[styles.stockContainer]}>
        <ThemedText style={styles.stockSymbol}>{item.symbol}</ThemedText>
        <MiniGraph data={item.results} increased={increased} />
        <ThemedText style={styles.openPrice}>
          {item.results[0].openPrice.toFixed(2)}
        </ThemedText>
        <ThemedText style={styles.percentage}>{percentage}</ThemedText>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={stocks}
        renderItem={renderStock}
        keyExtractor={(item) => item.symbol}
        style={containerStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  percentage: {},
  openPrice: {},
  stockContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 2,
  },
})
