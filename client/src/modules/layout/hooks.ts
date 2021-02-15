import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useRootState } from '../';
import { useSignOut } from '../sign/hooks';
import { actions } from './';

const useNavbarMini = () => {
  const dispatch = useDispatch();
  const onNavbarMini = useCallback(() => dispatch(actions.navbarMini()), [dispatch]);
  return () => {
    onNavbarMini();
  };
};

const useNavbarToggle = () => {
  const dispatch = useDispatch();
  const onNavbarToggle = useCallback(() => dispatch(actions.navbarToggle()), [dispatch]);
  return () => {
    onNavbarToggle();
  };
};

export const useNavbar = () => {
  const navbar = useRootState((state) => state.layout.navbar);
  const handleClose = useNavbarToggle();
  const handleNavbarMini = useNavbarMini();

  return { navbar, handleClose, handleNavbarMini };
};

export const useToolbar = () => {
  const handleNavbarToggle = useNavbarToggle();
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
