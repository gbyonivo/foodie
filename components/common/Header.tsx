import { useThemeColor } from '@/hooks/useThemeColor'
import { useRouter } from 'expo-router'
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconSymbol } from '../ui/IconSymbol'
import { ThemedText } from './ThemedText'

interface HeaderProps {
  title: string
  onBack?: () => void
}

export const Header = ({ title, onBack }: HeaderProps) => {
  const router = useRouter()
  const iconColor = useThemeColor({ colorName: 'text' })
  const { top } = useSafeAreaInsets()

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={[styles.title]}>{title}</ThemedText>
      <TouchableOpacity
        style={[styles.backButton, { top }]}
        onPress={() => {
          if (onBack) {
            return onBack()
          }
          router.back()
        }}
      >
        <IconSymbol name="chevron.left" size={24} color={iconColor} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    left: 8,
    paddingHorizontal: 8,
    position: 'absolute',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
})
