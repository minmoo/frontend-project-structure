import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useRootState } from '../';
import { signIn, signOut, signUp } from './sagas';
import { TSignIn, TSignUp } from './types';

export const useSignOut = (): (() => ReturnType<typeof signOut>) => {
  const dispatch = useDispatch();
  const onSignOut = useCallback(() => dispatch(signOut()), [dispatch]);
  return onSignOut;
};

const useSignCheck = () => {
  const history = useHistory();
  const userId = useRootState((state) => state.user.userId);
  useEffect(() => {
    if (userId) {
      history.push('/home');
    }
  }, [history, userId]);
};

export const useSignIn = () => {
  const dispatch = useDispatch();
  const onSignIn = useCallback((req: TSignIn) => dispatch(signIn(req)), [dispatch]);
  useSignCheck();

  return { onSignIn };
};

export const useSignUp = () => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignUp) => dispatch(signUp(req)), [dispatch]);
  useSignCheck();

  return { onSignUp };
};
