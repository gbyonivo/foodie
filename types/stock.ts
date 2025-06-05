export interface StockResult {
  openPrice: number
  highPrice: number
  lowPrice: number
  closePrice: number
  volume: number
  timestamp: number
}

export interface Stock {
  symbol: string
  results: StockResult[]
}
