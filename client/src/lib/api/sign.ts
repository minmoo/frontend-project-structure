type TParam = {
  id: string;
  pwd: string;
};
//로그인
export const signIn = ({ id, pwd }: TParam): boolean => {
  // const response = client.post('/api/auth/login', {id, pwd});
  // return response;

  const userId = localStorage.getItem('userId') || '';
  if ((userId == '' || id != userId) && pwd) {
    return false;
  }
  return true;
};

//회원가입
export const signUp = ({ id, pwd }: TParam): boolean => {
  const userId = localStorage.getItem('userId') || '';
  if (userId == '' || id != userId) {
    return true;
  }
  return false;
};

export const signOut = (): boolean => true;
