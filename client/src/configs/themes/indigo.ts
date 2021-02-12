import { colors, createMuiTheme, ThemeOptions } from '@material-ui/core';
import { indigo, red, blueGrey } from '@material-ui/core/colors';

const typography = {
  h1: {
    fontWeight: 500,
    fontSize: 35,
    letterSpacing: '-0.24px',
  },
  h2: {
    fontWeight: 500,
    fontSize: 29,
    letterSpacing: '-0.24px',
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: '-0.06px',
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '-0.06px',
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.05px',
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.05px',
  },
  overline: {
    fontWeight: 500,
  },
};

export const indigoTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: indigo[500],
    },
    secondary: {
      light: indigo['A100'],
      main: indigo[500],
      dark: indigo['A700'],
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    error: red,
  },
  status: {
    danger: 'orange',
  },
  typography,
  custom: {
    navbar: {
      width: 200,
    },
  },
} as ThemeOptions);
