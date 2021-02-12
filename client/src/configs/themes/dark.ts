import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: {
      light: indigo[100],
      main: indigo[500],
      dark: indigo[900],
    },
    background: {
      paper: '#1E2125',
      default: '#121212',
    },
    error: red,
  },
  status: {
    danger: 'orange',
  },
  custom: {
    navbar: {
      width: 200,
    },
  },
} as ThemeOptions);
