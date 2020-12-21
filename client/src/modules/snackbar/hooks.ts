import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {snackbar_call} from './actions';
import {TSnackbar} from './types';

export const useSnackbarCall = () => {
    const dispatch = useDispatch();
    const onSnackbarCall = useCallback((req:TSnackbar) => dispatch(snackbar_call(req)), [dispatch]);
    return onSnackbarCall;
};


