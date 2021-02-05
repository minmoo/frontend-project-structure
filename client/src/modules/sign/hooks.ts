import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {signUp, signIn, signOut} from './sagas';
import { TSignUp, TSignIn} from './types';

export const useSignUp = (): ((req: TSignUp) => ReturnType<typeof signUp>) => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignUp) => dispatch(signUp(req)), [dispatch]);
  return onSignUp;
};

export const useSignIn = (): ((req: TSignIn) => ReturnType<typeof signIn>) => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignIn) => dispatch(signIn(req)), [dispatch]);
  return onSignUp;
};

export const useSignOut = (): (() => ReturnType<typeof signOut>) => {
  const dispatch = useDispatch();
  const onSignOut = useCallback(() => dispatch(signOut()), [dispatch]);
  return onSignOut;
};
