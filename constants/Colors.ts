/**
 * A comprehensive color system for the app with semantic colors and accessibility considerations.
 * Colors are defined for both light and dark modes with proper contrast ratios.
 */

const tintColorLight = '#0A7EA4'
const tintColorDark = '#FFFFFF'

export const Colors = {
  light: {
    // Primary colors
    primary: '#0A7EA4',
    primaryDark: '#086688',
    primaryLight: '#0D96C2',

    // Text colors
    text: '#000000',
    textSecondary: '#687076',
    textTertiary: '#889096',

    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    backgroundTertiary: '#F1F3F5',

    // Status colors
    success: '#2ECC71',
    warning: '#F1C40F',
    error: '#E74C3C',
    info: '#3498DB',

    // UI element colors
    border: '#E9ECEF',
    divider: '#DEE2E6',
    overlay: 'rgba(0, 0, 0, 0.5)',

    // Navigation colors
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    onBackground: '#000000',
  },
  dark: {
    // Primary colors
    primary: '#0D96C2',
    primaryDark: '#0A7EA4',
    primaryLight: '#10B3E0',

    // Text colors
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textTertiary: '#6C7075',

    // Background colors
    background: '#151718',
    backgroundSecondary: '#1C1F20',
    backgroundTertiary: '#232627',

    // Status colors
    success: '#2ECC71',
    warning: '#F1C40F',
    error: '#E74C3C',
    info: '#3498DB',

    // UI element colors
    border: '#2D3235',
    divider: '#373B3E',
    overlay: 'rgba(0, 0, 0, 0.7)',

    // Navigation colors
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    onBackground: '#FFFFFF',
  },
}
