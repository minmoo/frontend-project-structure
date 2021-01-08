import { createAction } from 'typesafe-actions';

import { createRequestActionTypes } from '../../lib/createRequestSaga';
import { TUser } from './types';

export const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export const check = createAction(CHECK)<string>();
export const checkSuccess = createAction(CHECK_SUCCESS)<TUser>();
export const checkFailure = createAction(CHECK_FAILURE)<string>();
