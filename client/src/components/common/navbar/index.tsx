import React from 'react';
import { Drawer, Hidden, List, Box, Avatar, Typography } from '@material-ui/core';
import { useNavbar } from '../../../modules/layout';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { deepPurple } from '@material-ui/core/colors';

type TStyleProps = {
  breakWidth: number;
};
const useStyles = makeStyles<Theme, TStyleProps>((theme: Theme) =>
  createStyles({
    drawer: (props) => ({
      [theme.breakpoints.up('sm')]: {
        width: props.breakWidth,
        flexShink: 0,
      },
    }),
    paper: (props) => ({
      width: props.breakWidth,
    }),
    mixin: theme.mixins.toolbar,
    avatar: {
      cursor: 'pointer',
      width: 44,
      height: 44,
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      marginRight: theme.spacing(1),
    },
  }),
);

export default function Navbar(): React.ReactElement {
  const { layout, handleClose } = useNavbar();
  const classes = useStyles({ breakWidth: layout.breakWidth });

  const theme = useTheme();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box className={classes.mixin} alignItems="center" display="flex" p={2}>
        <Avatar className={classes.avatar} component={Link} to="/home/dashboard">
          SSG
        </Avatar>
        <Typography color="textPrimary" variant="h5">
          Admin
        </Typography>
      </Box>

      <List component="nav" className={classes.navItems}>
        {layout.navbar.items.map((item) => (
          <NavItem {...item} key={item.id} />
        ))}
      </List>
    </Box>
  );

  return (
    <nav className={classes.drawer}>
      {/* Mobile */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          classes={{
            paper: classes.paper,
          }}
          anchor={theme.direction == 'rtl' ? 'right' : 'left'}
          onClose={handleClose}
          open={layout.navbar.isOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          {content}
        </Drawer>
      </Hidden>

      {/* PC */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.paper,
          }}
          variant="permanent"
        >
          {content}
        </Drawer>
      </Hidden>
    </nav>
  );
}
