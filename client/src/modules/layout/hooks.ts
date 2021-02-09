import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { actions } from './';
import {useRootState} from '../';
import { useHistory } from 'react-router';
import { useSignOut } from '../sign/hooks';


const useNavbarToggle = () => {
  const dispatch = useDispatch();
  const onNavbarToggle = useCallback(() => dispatch(actions.navbarToggle()), [dispatch]);
  return () => {onNavbarToggle()}
}

export const useNavbar = () =>{
  const layout = useRootState((state) => state.layout);
  const handleClose = useNavbarToggle();

  return {layout, handleClose}
}

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
  
  return {layout, userId, handleNavbarToggle, handleSignOut, handleSignIn}
}
