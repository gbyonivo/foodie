import { Stock } from '@/types/stock'
import { calculatePercentageChange } from '@/utils/stock-helper'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import {
  FlatList,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { ThemedText } from '../common/ThemedText'
import { MiniGraph } from './mini-graph'

// Constants
const ITEM_HEIGHT = 60 // Height of each stock item in pixels

interface StockListProps {
  stocks: Stock[]
  containerStyle?: StyleProp<ViewStyle>
}

const getItemLayout = (_: any, index: number) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
})

export function StockList({ stocks, containerStyle }: StockListProps) {
  const router = useRouter()
  const renderStock = useCallback(
    ({ item }: { item: Stock }) => {
      const index = item.results.length - 1
      const percentage = calculatePercentageChange(
        item.results[index].closePrice - item.results[index].openPrice,
        item.results[index].closePrice,
      )
      const increased =
        item.results[index].closePrice > item.results[index].openPrice
      return (
        <TouchableOpacity
          key={item.symbol}
          style={[styles.stockContainer]}
          onPress={() => {
            router.push(`/graphs/${item.symbol}`)
          }}
        >
          <ThemedText style={styles.stockSymbol}>{item.symbol}</ThemedText>
          <MiniGraph data={item.results} increased={increased} />
          <ThemedText style={styles.openPrice}>
            {item.results[0].openPrice.toFixed(2)}
          </ThemedText>
          <ThemedText style={styles.percentage}>{percentage}</ThemedText>
        </TouchableOpacity>
      )
    },
    [router],
  )

  return (
    <View>
      <FlatList
        data={stocks}
        renderItem={renderStock}
        keyExtractor={(item) => item.symbol}
        style={containerStyle}
        getItemLayout={getItemLayout}
        removeClippedSubviews
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
    height: ITEM_HEIGHT,
    alignItems: 'center',
  },
  stockSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 2,
  },
})
