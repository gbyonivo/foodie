import { SafeAreaView, View, type ViewProps } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
  safeArea?: boolean
}

export function ThemedView({
  style,
  lightColor,
  darkColor,
  safeArea,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({
    override: { light: lightColor, dark: darkColor },
    colorName: 'background',
  })
  if (safeArea) {
    return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  }
  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
