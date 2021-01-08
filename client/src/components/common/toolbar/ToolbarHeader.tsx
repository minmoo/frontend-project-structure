import * as React from 'react';
import { AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

type TProps = {
  title: string;
  isSignIn: boolean;
  breakWidth: number;
  handleSignClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function ToolbarHeader({
  title,
  isSignIn,
  breakWidth = 40,
  handleSignClick,
  handleToggle,
}: TProps): React.ReactElement {
  const classes = useStyles({ breakWidth: breakWidth });

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <Button color="inherit" onClick={handleSignClick}>
          {isSignIn ? 'Sign Out' : 'Sign In'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
