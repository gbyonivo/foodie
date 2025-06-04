import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { SearchForm } from "@/components/dishes-ui/SearchForm";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeScreen() {
  const titleColor = useThemeColor({
    colorName: "text",
  });
  const dark = useThemeColor({
    colorName: "primaryDark",
  });

  const light = useThemeColor({
    colorName: "primaryLight",
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light, dark }}
      headerImage={
        <IconSymbol
          size={310}
          color={titleColor}
          name="fork.knife"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container} safeArea>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>
            Kitchen and Vibes
          </ThemedText>
          <SearchForm containerStyle={styles.searchForm} />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchForm: {
    marginTop: 16,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  title: {
    textAlign: "center",
  },
});
