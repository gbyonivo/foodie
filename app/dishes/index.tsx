import { ThemedText } from '@/components/common/ThemedText'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { FlatList, TouchableOpacity, View } from 'react-native'

const results = [
  {
    id: '1',
    name: 'Pizza',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Burger',
    image: 'https://via.placeholder.com/150',
  },
]

export default function Dishes() {
  const { search } = useGlobalSearchParams()
  const router = useRouter()

  const renderItem = ({ item }: { item: (typeof results)[0] }) => (
    <TouchableOpacity onPress={() => router.push(`/dishes/${item.id}`)}>
      <ThemedText>{item.name}</ThemedText>
    </TouchableOpacity>
  )

  return (
    <View>
      <ThemedText>Results for {search}</ThemedText>
      <FlatList<(typeof results)[0]>
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
