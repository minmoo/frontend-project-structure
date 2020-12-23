import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RootState } from '../../../modules';
import useLayoutStyles from '../layoutStyle';
import { useNavbarToggle } from '../../../modules/layout';
import { useSignOut } from '../../../modules/sign/hooks';
import { History } from 'history';

type TProps = {
  history: History;
};

export default function LoToolbar({ history }: TProps): React.ReactElement {
  const classes = useLayoutStyles();
  const onNavbarToggle = useNavbarToggle();

  const onSignOut = useSignOut();

  const layout = useSelector((state: RootState) => state.layout);
  const sign = useSelector((state: RootState) => state.sign);

  const handleNavbarToggle = () => {
    onNavbarToggle();
  };

  const handleSignOut = () => {
    onSignOut();
  };

  const handleSignIn = () => {
    history.push('/signIn');
  };

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
        {sign.id ? (
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        ) : (
          <Button color="inherit" onClick={handleSignIn}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
