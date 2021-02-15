import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useRootState } from '../';
import { useSignOut } from '../sign/hooks';
import { actions } from './';

const useNavbarFixToggle = () => {
  const dispatch = useDispatch();
  const onNavbarFixToggle = useCallback(() => dispatch(actions.navbarFixToggle()), [dispatch]);
  return () => {
    onNavbarFixToggle();
  };
};

const useNavbarOpenToggle = () => {
  const dispatch = useDispatch();
  const onNavbarOpenToggle = useCallback(() => dispatch(actions.navbarOpenToggle()), [dispatch]);
  return () => {
    onNavbarOpenToggle();
  };
};

export const useNavbar = () => {
  const navbar = useRootState((state) => state.layout.navbar);
  const handleClose = useNavbarOpenToggle();
  const handleNavbarFix = useNavbarFixToggle();

  return { navbar, handleClose, handleNavbarFix };
};

export const useToolbar = () => {
  const handleNavbarToggle = useNavbarOpenToggle();
  const history = useHistory();
  const onSignOut = useSignOut();

  const layout = useRootState(({ layout }) => layout);
  const userId = useRootState(({ user }) => user.userId);

  const handleSignOut = () => {
    onSignOut();
  };

  const handleSignIn = () => {
    history.push('/signIn');
  };

  return { layout, userId, handleNavbarToggle, handleSignOut, handleSignIn };
};
