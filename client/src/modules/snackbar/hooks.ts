import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { snackbar_call } from './actions';
import { TSnackbar, TSnackbarAction } from './types';

export const useSnackbarCall = (): ((req: TSnackbar) => TSnackbarAction) => {
  const dispatch = useDispatch();
  const onSnackbarCall = useCallback((req: TSnackbar) => dispatch(snackbar_call(req)), [dispatch]);
  return onSnackbarCall;
};
