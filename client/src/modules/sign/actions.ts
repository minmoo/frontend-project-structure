import {createAction} from 'typesafe-actions';
import {TSignIn, TSignUp} from './types';

export const SIGN_IN = 'sign/SIGN_IN';
export const SIGN_OUT = 'sign/SIGN_OUT';
export const SIGN_UP = 'sign/SIGN_UP';

export const sign_in = createAction(SIGN_IN)<TSignIn>();
export const sign_out = createAction(SIGN_OUT)<String>();
export const sign_up = createAction(SIGN_UP)<TSignUp>();