import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../modules';
import { useSignOut } from '../../../../modules/sign/hooks';
import { useHistory } from 'react-router';
import { useNavbarToggle } from '../../../../modules/layout';
import ToolbarHeader from '../ToolbarHeader';

export default function CustomToolbar(): React.ReactElement {
  const onNavbarToggle = useNavbarToggle();
  const history = useHistory();
  const onSignOut = useSignOut();

  const layout = useSelector(({ layout }: RootState) => layout);
  const userId = useSelector(({ user }: RootState) => user.userId);

  const handleNavbarToggle = () => {
    onNavbarToggle();
  };

  const handleSignOut = () => {
    onSignOut();
  };

  const handleSignIn = () => {
    history.push('/signIn');
  };

  return (
    <ToolbarHeader
      title={layout.toolbar.title}
      breakWidth={layout.breakWidth}
      isSignIn={userId ? true : false}
      handleSignClick={userId ? handleSignOut : handleSignIn}
      handleToggle={handleNavbarToggle}
    />
  );
}
