import * as React from 'react';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import { List, Divider, Drawer } from '@material-ui/core';
import NavItem from './NavItem';
import { TNavItem } from '../../../modules/layout';

type TStyleProps = {
  breakWidth: number;
};
const useStyles = makeStyles<Theme, TStyleProps>((theme: Theme) =>
  createStyles({
    navItems: {
      width: '100%',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: (props) => ({
      width: props.breakWidth,
    }),
  }),
);

type TNavItemsProps = {
  items: TNavItem[];
  variant: string;
  breakWidth: number;
  isOpen?: boolean;
  handleClose?: (event: Record<string, unknown>, reason: 'backdropClick' | 'escapeKeyDown') => void;
};

export default function NavItems({
  items,
  variant,
  breakWidth,
  isOpen,
  handleClose,
}: TNavItemsProps): React.ReactElement {
  const classes = useStyles({ breakWidth: breakWidth });
  const theme = useTheme();

  if (variant == 'temporary') {
    return (
      <Drawer
        variant="temporary"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isOpen}
        onClose={handleClose}
        anchor={theme.direction == 'rtl' ? 'right' : 'left'}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List component="nav" className={classes.navItems}>
            {items.map((item) => (
              <NavItem {...item} key={item.id} />
            ))}
          </List>
        </div>
      </Drawer>
    );
  } else {
    return (
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List component="nav" className={classes.navItems}>
            {items.map((item) => (
              <NavItem {...item} key={item.id} />
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}
