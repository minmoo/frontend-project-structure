import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { sign_up, sign_in, sign_out } from './actions';
import { TSignUp, TSignIn, TSignAction } from './types';

export const useSignUp = (): ((req: TSignUp) => TSignAction) => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignUp) => dispatch(sign_up(req)), [dispatch]);
  return onSignUp;
};

export const useSignIn = (): ((req: TSignIn) => TSignAction) => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignIn) => dispatch(sign_in(req)), [dispatch]);
  return onSignUp;
};

export const useSignOut = (): (() => TSignAction) => {
  const dispatch = useDispatch();
  const onSignOut = useCallback(() => dispatch(sign_out()), [dispatch]);
  return onSignOut;
};
