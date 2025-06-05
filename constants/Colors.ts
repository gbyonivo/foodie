/**
 * A comprehensive color system for the app with semantic colors and accessibility considerations.
 * Colors are defined for both light and dark modes with proper contrast ratios.
 */

const tintColorLight = 'rgb(10, 126, 164)'
const tintColorDark = 'rgb(255, 255, 255)'

export const Colors = {
  light: {
    // Primary colors
    primary: 'rgb(10, 126, 164)',
    primaryDark: 'rgb(8, 102, 136)',
    primaryLight: 'rgb(13, 150, 194)',

    // Text colors
    text: 'rgb(17, 24, 28)',
    textSecondary: 'rgb(104, 112, 118)',
    textTertiary: 'rgb(136, 144, 150)',

    // Background colors
    background: 'rgb(255, 255, 255)',
    backgroundSecondary: 'rgb(248, 249, 250)',
    backgroundTertiary: 'rgb(241, 243, 245)',

    // Status colors
    success: 'rgb(46, 204, 113)',
    warning: 'rgb(241, 196, 15)',
    error: 'rgb(231, 76, 60)',
    info: 'rgb(52, 152, 219)',

    // UI element colors
    border: 'rgb(233, 236, 239)',
    divider: 'rgb(222, 226, 230)',
    overlay: 'rgba(0, 0, 0, 0.5)',

    // Navigation colors
    tint: tintColorLight,
    icon: 'rgb(104, 112, 118)',
    tabIconDefault: 'rgb(104, 112, 118)',
    tabIconSelected: tintColorLight,
    onBackground: 'rgb(0, 0, 0)',
  },
  dark: {
    // Primary colors
    primary: 'rgb(13, 150, 194)',
    primaryDark: 'rgb(10, 126, 164)',
    primaryLight: 'rgb(16, 179, 224)',

    // Text colors
    text: 'rgb(236, 237, 238)',
    textSecondary: 'rgb(155, 161, 166)',
    textTertiary: 'rgb(108, 112, 117)',

    // Background colors
    background: 'rgb(21, 23, 24)',
    backgroundSecondary: 'rgb(28, 31, 32)',
    backgroundTertiary: 'rgb(35, 38, 39)',

    // Status colors
    success: 'rgb(46, 204, 113)',
    warning: 'rgb(241, 196, 15)',
    error: 'rgb(231, 76, 60)',
    info: 'rgb(52, 152, 219)',

    // UI element colors
    border: 'rgb(45, 50, 53)',
    divider: 'rgb(55, 59, 62)',
    overlay: 'rgba(0, 0, 0, 0.7)',

    // Navigation colors
    tint: tintColorDark,
    icon: 'rgb(155, 161, 166)',
    tabIconDefault: 'rgb(155, 161, 166)',
    tabIconSelected: tintColorDark,
    onBackground: 'rgb(255, 255, 255)',
  },
}
