import { StyleSheet, TextInput, type TextInputProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  large?: boolean;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  large,
  ...rest
}: ThemedTextInputProps) {
  const color = useThemeColor({
    override: { light: lightColor, dark: darkColor },
    colorName: "text",
  });

  const borderColor = useThemeColor({
    override: { light: lightColor, dark: darkColor },
    colorName: "border",
  });

  return (
    <TextInput
      style={[
        { color, borderColor },
        large ? styles.large : styles.normal,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  large: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold",
  },
  normal: {
    fontSize: 16,
    lineHeight: 20,
  },
});
