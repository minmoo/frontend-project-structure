import * as React from 'react';
import { Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../modules';
import { useNavbarToggle } from '../../../../modules/layout';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import NavItems from '../NavItems';

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
  }),
);

export default function CustomNavbar(): React.ReactElement {
  const onNavbarToggle = useNavbarToggle();

  const layout = useSelector((state: RootState) => state.layout);
  const classes = useStyles({ breakWidth: layout.breakWidth });

  const handleClose = () => {
    onNavbarToggle();
  };

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <NavItems
          items={layout.navbar.items}
          isOpen={layout.navbar.isOpen}
          variant="temporary"
          breakWidth={layout.breakWidth}
          handleClose={handleClose}
        />
      </Hidden>

      <Hidden xsDown implementation="css">
        <NavItems items={layout.navbar.items} variant="permanent" breakWidth={layout.breakWidth} />
      </Hidden>
    </nav>
  );
}
