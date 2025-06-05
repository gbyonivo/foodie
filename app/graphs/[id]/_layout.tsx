import { Header } from '@/components/common/Header'
import { Stack, useRouter } from 'expo-router'

export default function Layout() {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: () => <Header title="Graph" onBack={() => router.back()} />,
        }}
      />
    </Stack>
  )
}
