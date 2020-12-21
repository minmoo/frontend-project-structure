import * as React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import {SnackbarSetContext, SnackbarValueContext} from './SnackbarProvider';

function Alert(props: AlertProps){
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function ContextSnackbar(){

    const setSnackbar = React.useContext(SnackbarSetContext);
    const snackbar = React.useContext(SnackbarValueContext);
    const {message, type} = snackbar;

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason == "clickaway"){
            return;
        }
        setSnackbar(false, message, type);
    };


    console.log('CustomizedSnackbar refresh');
    return (
        <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type}>
                {message}
            </Alert>
        </Snackbar>
    )
};