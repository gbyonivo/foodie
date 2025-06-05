import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

export type ThemedViewProps = TouchableOpacityProps & {
  lightColor?: string
  darkColor?: string
  safeArea?: boolean
  label: string
  loading?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  touchableOpacityStyle?: StyleProp<ViewStyle>
}

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  safeArea,
  label,
  loading,
  disabled,
  touchableOpacityStyle,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({
    colorName: 'onBackground',
    override: { light: lightColor, dark: darkColor },
  })

  const textColor = useThemeColor({
    colorName: 'textTertiary',
    override: { light: lightColor, dark: darkColor },
  })

  const textStyle = { color: textColor }

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      {...otherProps}
      style={touchableOpacityStyle}
    >
      <ThemedView style={[{ backgroundColor }, styles.container, style]}>
        <ThemedText type="defaultSemiBold" style={[textStyle, styles.text]}>
          {label}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
    borderRadius: 10,
  },
  container: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  text: {
    alignSelf: 'center',
  },
})
