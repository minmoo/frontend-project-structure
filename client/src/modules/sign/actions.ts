import {createAction} from 'typesafe-actions';
import {TSignIn, TSignUp} from './types';

export const SIGN_IN = 'sign/SIGN_IN';
export const SIGN_IN_SUCCESS = 'sign/SIGN_IN';
export const SIGN_IN_FAIL = 'sign/SIGN_IN';

export const SIGN_OUT = 'sign/SIGN_OUT';
export const SIGN_OUT_SUCCESS = 'sign/SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'sign/SIGN_OUT_FAIL';

export const SIGN_UP = 'sign/SIGN_UP';
export const SIGN_UP_SUCCESS = 'sign/SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'sign/SIGN_UP_FAIL';

export const sign_in = createAction(SIGN_IN)<TSignIn>();
export const sign_in_success = createAction(SIGN_IN_SUCCESS)();
export const sign_in_fail = createAction(SIGN_IN_FAIL)();

export const sign_out = createAction(SIGN_OUT)<String>();
export const sign_out_success = createAction(SIGN_OUT_SUCCESS)();
export const sign_out_fail = createAction(SIGN_OUT_FAIL)();

export const sign_up = createAction(SIGN_UP)<TSignUp>();
export const sign_up_success = createAction(SIGN_UP_SUCCESS)();
export const sign_up_fail = createAction(SIGN_UP_FAIL)();