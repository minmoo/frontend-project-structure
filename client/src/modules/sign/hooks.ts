import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {signUp, signIn, signOut} from './sagas';
import { TSignUp, TSignIn} from './types';
import {RootState} from '../../modules'
import { useHistory } from 'react-router-dom';



export const useSignOut = (): (() => ReturnType<typeof signOut>) => {
  const dispatch = useDispatch();
  const onSignOut = useCallback(() => dispatch(signOut()), [dispatch]);
  return onSignOut;
};

const useSignCheck = () => {
  const history = useHistory();

  const userId = useSelector(({ user }: RootState) => user.userId);
  useEffect(() => {
    if (userId) {
      history.push('/home');
    }
  }, [history, userId]);
}

export const useSignIn = () => {
  const dispatch = useDispatch();
  const onSignIn = useCallback((req: TSignIn) => dispatch(signIn(req)), [dispatch]);
  useSignCheck();

  return {onSignIn};
}

export const useSignUp = () => {
  const dispatch = useDispatch();
  const onSignUp = useCallback((req: TSignUp) => dispatch(signUp(req)), [dispatch]);
  useSignCheck();

  return {onSignUp};
}
