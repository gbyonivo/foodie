/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'react-native'

export function useThemeColor({
  override,
  colorName,
}: {
  override?: { light?: string; dark?: string }
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
}) {
  const theme = useColorScheme() ?? 'light'
  const colorFromProps = override?.[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}
