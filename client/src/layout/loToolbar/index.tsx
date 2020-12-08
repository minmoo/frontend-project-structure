import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RootState } from '../../modules';
import useLayoutStyles from '../layoutStyle';
import {useNavbarToggle} from '../../modules/layout';
import { SnackbarSetContext } from '../../configs/CustomSnackbarProvider';

export default function LoToolbar() {
    const classes = useLayoutStyles();
    const onNavbarToggle = useNavbarToggle();


    const layout = useSelector((state:RootState) => state.layout);

    const handleNavbarToggle = () => {
        onNavbarToggle()
    }

    const setSnackbar = React.useContext(SnackbarSetContext);

    const handleClick = () => {
        setSnackbar(true, '안녕하세요', "info");
    }

    const handleClickB = () => {
        setSnackbar(true, '하이', 'error');
    }

    console.log('Content re-render');

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
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {layout.toolbar.title}
                </Typography>
                <Button color="inherit" onClick={handleClick}>Button</Button>
                <Button color="inherit" onClick={handleClickB}>ButtonB</Button>
            </Toolbar>
        </AppBar>
    );
};