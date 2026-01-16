import { Stock } from '@/types/stock'
import { convertData } from '@/utils/stock-helper'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import stocksFromJSON from '../../utils/data.json'
import { ThemedText } from '../common/ThemedText'
import { ThemedView } from '../common/ThemedView'
import { StockList } from '../graph-ui/stock-list'

export const GraphsScreen = () => {
  const [stocks, setStocks] = useState<Stock[]>(() =>
    convertData(stocksFromJSON as unknown[]),
  )

  return (
    <ThemedView safeArea style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Stocks</ThemedText>
      </View>
      <StockList stocks={stocks} containerStyle={styles.listContainer} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 16,
  },
})
