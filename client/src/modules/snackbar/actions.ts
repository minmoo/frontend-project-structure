import { createAction } from 'typesafe-actions';
import { TSnackbar } from './types';

export const SNACKBAR_CALL = 'snackbar/SNACKBAR_CALL';

export const snackbar_call = createAction(SNACKBAR_CALL)<TSnackbar>();
