import SignTemplate from '../../components/sign/SignTemplate';
import SignUpForm from '../../components/sign/SignUpForm';

export default function SignUpPage(): React.ReactElement {
  return (
    <SignTemplate title={'Sign Up'}>
      <SignUpForm />
    </SignTemplate>
  );
}
