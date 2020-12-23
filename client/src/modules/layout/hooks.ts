import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { navbar_toggle } from './actions';
import { TLayoutAction } from './types';

export const useNavbarToggle = (): (() => TLayoutAction) => {
  const dispatch = useDispatch();
  const onNavbarToggle = useCallback(() => dispatch(navbar_toggle()), [dispatch]);
  return onNavbarToggle;
};
