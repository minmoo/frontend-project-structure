import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      'html': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        'height': '100%',
        'width': '100%',
      },
      'body': {
        backgroundColor: '#f4f6f8',
        height: '100%',
        width: '100%',
      },
      'a': {
        textDecoration: 'none',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  }),
);

export default function GlobalStyles() {
  useStyles();

  return null;
}
