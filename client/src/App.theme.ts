import { createGlobalStyle } from 'styled-components';

import colors from './constants/colors';
import storeManager from './store/storeManager';

const GlobalStyleCSS: any = {
  dark: {
    'background-color': colors.dark.backgroundColor,
    color: colors.dark.textColor,
  },
  light: {
    'background-color': colors.light.backgroundColor,
    color: colors.light.textColor,
  },
};

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${() => GlobalStyleCSS[storeManager.getCurrentTheme()]['background-color']};
  color: ${() => GlobalStyleCSS[storeManager.getCurrentTheme()]['color']};
}
`;

export class ThemeManager {
  currentTheme: 'light' | 'dark';

  constructor() {
    this.currentTheme = storeManager.getCurrentTheme();
  }
}
