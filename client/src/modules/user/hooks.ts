import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { check } from './actions';
import { TUserAction } from './types';

export const useCheck = (): ((req: string) => TUserAction) => {
  const dispatch = useDispatch();
  const onCheck = useCallback((req: string) => dispatch(check(req)), [dispatch]);
  return onCheck;
};
