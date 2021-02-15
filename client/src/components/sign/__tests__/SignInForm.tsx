import { fireEvent, render, screen } from '../../../lib/test/test-utils';
import SignInForm from '../SignInForm';

//실패하는 테스트를 작성

//각 인풋에 유효성 검사를 테스트

//성공하는 테스트를 실행

describe('<SignInForm/>', () => {
  beforeEach(() => {
    render(<SignInForm />, { initialState: { sign: { error: '' } } });
  });

  test('display test', () => {
    screen.getByLabelText('User Id');
    screen.getByLabelText('User Password');
    screen.getAllByRole('button');
    screen.getByText("Don't have an account?");
  });

  test('empty submit test', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findByText('password를 입력해주세요.'));
    expect(await screen.findByText('id를 입력해주세요.'));
  });

  test('input id test', async () => {
    const inputId = screen.getByRole('textbox', { name: /id/i });
    fireEvent.input(inputId, {
      target: {
        value: 'minsu',
      },
    });

    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findByText('password를 입력해주세요.'));
  });
});
