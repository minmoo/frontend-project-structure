import { Avatar, Box, Drawer, Hidden, IconButton, List, Typography } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavbar } from '../../../modules/layout';
import NavItem from './NavItem';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    drawer: {
      width: theme.custom.navbar.width,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
      width: theme.custom.navbar.width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    miniPaper: {
      'transition': theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      'width': theme.spacing(8),
      'overflowX': 'hidden',
      '&:hover': {
        width: theme.custom.navbar.width,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    avatar: {
      cursor: 'pointer',
      width: 44,
      height: 44,
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      marginRight: theme.spacing(1),
    },
    title: {
      paddingRight: theme.spacing(1),
    },
  }),
);

export default function Navbar(): React.ReactElement {
  const { navbar, handleClose, handleNavbarMini } = useNavbar();
  const classes = useStyles();
  const theme = useTheme();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box className={classes.toolbar}>
        <Avatar className={classes.avatar} component={Link} to="/home/dashboard">
          SSG
        </Avatar>
        <Typography className={classes.title} color="textPrimary" variant="h5">
          Admin
        </Typography>

        {!navbar.isOpen && (
          <IconButton onClick={handleNavbarMini}>
            {navbar.isMini ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}
      </Box>

      <List component="nav" className={classes.navItems}>
        {navbar.items.map((item) => (
          <NavItem {...item} key={item.id} />
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      {/* Mobile */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          classes={{
            paper: classes.paper,
          }}
          anchor={theme.direction == 'rtl' ? 'right' : 'left'}
          onClose={handleClose}
          open={navbar.isOpen}
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
          className={`${classes.drawer} ${navbar.isMini ? classes.miniPaper : classes.paper}`}
          classes={{
            paper: `${navbar.isMini ? classes.miniPaper : classes.paper}`,
          }}
          variant="permanent"
        >
          {content}
        </Drawer>
      </Hidden>
    </nav>
  );
}
