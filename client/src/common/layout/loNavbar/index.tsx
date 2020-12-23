import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import useLayoutStyle from '../layoutStyle';
import NavItems from './NavItems';
import { useNavbarToggle } from '../../../modules/layout';

export default function Navbar(): React.ReactElement {
  const theme = useTheme();
  const classes = useLayoutStyle();
  const onNavbarToggle = useNavbarToggle();

  const layout = useSelector((state: RootState) => state.layout);

  const handleClose = () => {
    onNavbarToggle();
  };

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={layout.navbar.isOpen}
          onClose={handleClose}
          anchor={theme.direction == 'rtl' ? 'right' : 'left'}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          <NavItems items={layout.navbar.items} />
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
        >
          <NavItems items={layout.navbar.items} />
        </Drawer>
      </Hidden>
    </nav>
  );
}
