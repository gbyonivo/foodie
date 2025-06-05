import { Stock } from '@/types/stock'
import { convertData } from '@/utils/stock-helper'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import stocksFromJSON from '../../utils/data.json'
import { ThemedText } from '../common/ThemedText'
import { ThemedView } from '../common/ThemedView'
import { MainGraph } from '../graph-ui/main-graph'

export const GraphsScreen = () => {
  const { id } = useLocalSearchParams()
  const [stock, setStocks] = useState<Stock | null>(
    () =>
      convertData(stocksFromJSON as unknown[]).find(
        (stock) => stock.symbol === id,
      ) || null,
  )

  if (!stock) {
    return (
      <ThemedView safeArea style={styles.container}>
        <ThemedText>Stock not found</ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView safeArea style={styles.container}>
      <ThemedText style={styles.titleContainer} type="subtitle">
        {stock?.symbol}
      </ThemedText>
      <MainGraph
        data={stock.results}
        increased={stock.results[0].closePrice > stock.results[0].openPrice}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginVertical: 32,
  },
  listContainer: {
    marginTop: 16,
  },
})
