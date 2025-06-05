import { Stock } from '@/types/stock'

export const convertData = (data: unknown[]): Stock[] => {
  return data.reduce((acc: Stock[], item) => {
    const stock = item as Stock
    // TODO: do proper type checking
    if (stock.results.length > 0) {
      return [...acc, stock]
    }
    return acc
  }, [] as Stock[])
}

export const calculatePercentageChange = (
  openPrice: number,
  closePrice: number,
): string => {
  if (openPrice === 0) return '0.00%'
  // todo: research the calculation
  const percentage = (closePrice - openPrice) / openPrice
  return `${percentage.toFixed(2)}%`
}
