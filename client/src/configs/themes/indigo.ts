import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';

export const indigoTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: {
      light: indigo['A100'],
      main: indigo['A400'],
      dark: indigo['A700'],
    },
    // background: {
    //     paper: '#FFFFFF',
    //     default: '#f6f7f9'
    // },
    error: red,
  },
  status: {
    danger: 'orange',
  },
} as ThemeOptions);
