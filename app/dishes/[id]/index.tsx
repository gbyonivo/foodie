import { ThemedText } from "@/components/common/ThemedText";
import { useGlobalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Dish() {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <ThemedText>{id}</ThemedText>
    </View>
  );
}
