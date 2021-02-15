import { AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useToolbar } from '../../../modules/layout';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.custom.navbar.width}px)`,
        marginLeft: theme.custom.navbar.width,
      },
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarMini: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.spacing(8)}px)`,
        marginLeft: theme.spacing(8),
      },
    },
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
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={`${layout.navbar.isFix ? classes.appBar : classes.appBarMini}`}>
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
