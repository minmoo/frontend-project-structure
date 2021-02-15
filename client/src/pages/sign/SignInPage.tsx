import SignInForm from '../../components/sign/SignInForm';
import SignTemplate from '../../components/sign/SignTemplate';

export default function SignUpPage(): React.ReactElement {
  return (
    <SignTemplate title={'Sign In'}>
      <SignInForm />
    </SignTemplate>
  );
}
