import * as React from 'react';
import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useToolbar } from '../../../modules/layout';

type TStyle = {
  breakWidth: number;
};

const useStyles = makeStyles<Theme, TStyle>((theme: Theme) =>
  createStyles({
    appBar: (props) => ({
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${props.breakWidth}px)`,
        marginLeft: props.breakWidth,
      },
    }),
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ToolbarHeader(): React.ReactElement {
  const { layout, userId, handleNavbarToggle, handleSignOut, handleSignIn } = useToolbar();
  const classes = useStyles({ breakWidth: layout.breakWidth });

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleNavbarToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {layout.toolbar.title}
        </Typography>

        <Button color="inherit" onClick={userId ? handleSignOut : handleSignIn}>
          {userId ? 'Sign Out' : 'Sign In'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
