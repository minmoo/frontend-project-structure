import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {sign_up} from './actions';
import {TSignUp} from './types';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const onSignUp = useCallback((req:TSignUp) => dispatch(sign_up(req)), [dispatch]);
    return onSignUp;
};

export const useSignIn = () => {};

export const useSignOut = () => {};
