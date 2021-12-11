import { createGlobalStyle } from 'styled-components';
import colors from '../../constants/colors';
import classes from './PageLoader.module.scss';

const GlobalStyleCss: any = {
  dark: {
    'loader-path': '#fff',
  },
  light: {
    'loader-path': '#2f3545',
  },
};

export const GlobalStyle = createGlobalStyle`
  .${classes.Loader} {
    --dot: ${colors.common.primaryGreenishColor};
    --path: ${(props: any) => GlobalStyleCss[props.theme.mode]['loader-path']};;
  }
`;
