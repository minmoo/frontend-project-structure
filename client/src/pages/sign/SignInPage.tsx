import React from 'react';
import SignTemplate from '../../components/sign/SignTemplate';
import SignInForm from '../../components/sign/container/SignInForm';

export default function SignUpPage(): React.ReactElement {
  return (
    <SignTemplate title={'Sign In'}>
      <SignInForm />
    </SignTemplate>
  );
}
