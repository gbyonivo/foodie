/**
 * A comprehensive color system for the app with semantic colors and accessibility considerations.
 * Colors are defined for both light and dark modes with proper contrast ratios.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    // Primary colors
    primary: "#0a7ea4",
    primaryDark: "#086688",
    primaryLight: "#0d96c2",

    // Text colors
    text: "#11181C",
    textSecondary: "#687076",
    textTertiary: "#889096",

    // Background colors
    background: "#ffffff",
    backgroundSecondary: "#f8f9fa",
    backgroundTertiary: "#f1f3f5",

    // Status colors
    success: "#2ecc71",
    warning: "#f1c40f",
    error: "#e74c3c",
    info: "#3498db",

    // UI element colors
    border: "#e9ecef",
    divider: "#dee2e6",
    overlay: "rgba(0, 0, 0, 0.5)",

    // Navigation colors
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    onBackground: "#000000",
  },
  dark: {
    // Primary colors
    primary: "#0d96c2",
    primaryDark: "#0a7ea4",
    primaryLight: "#10b3e0",

    // Text colors
    text: "#ECEDEE",
    textSecondary: "#9BA1A6",
    textTertiary: "#6C7075",

    // Background colors
    background: "#151718",
    backgroundSecondary: "#1c1f20",
    backgroundTertiary: "#232627",

    // Status colors
    success: "#2ecc71",
    warning: "#f1c40f",
    error: "#e74c3c",
    info: "#3498db",

    // UI element colors
    border: "#2d3235",
    divider: "#373b3e",
    overlay: "rgba(0, 0, 0, 0.7)",

    // Navigation colors
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    onBackground: "#ffffff",
  },
};
