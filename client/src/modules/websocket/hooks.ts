import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { connect } from './actions';
import { TWebSocketAction } from './types';

export const useWsConnect = (): (() => TWebSocketAction) => {
  const dispatch = useDispatch();
  const onConnect = useCallback(() => dispatch(connect()), [dispatch]);
  return onConnect;
};
