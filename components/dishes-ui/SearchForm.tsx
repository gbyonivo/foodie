import { ThemedTextInput } from '@/components/common/ThemedTextInput'
import { getWidthByRatio } from '@/utils/common'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { ThemedButton } from '../common/ThemedButton'
import { ThemedView } from '../common/ThemedView'

interface SearchFormProps {
  containerStyle?: StyleProp<ViewStyle>
}

export function SearchForm({ containerStyle }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  return (
    <View style={styles.container}>
      <ThemedView style={[styles.innerContainer, containerStyle]}>
        <ThemedTextInput
          placeholder="What dish are you looking for?"
          onChangeText={setSearchQuery}
          style={styles.textInput}
        />
        <ThemedButton
          onPress={() => router.push(`/dishes?search=${searchQuery}`)}
          label="Search"
          style={styles.buttonContainer}
        />
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 'bold',
    width: getWidthByRatio(0.8),
  },
  innerContainer: {
    gap: 32,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
})
