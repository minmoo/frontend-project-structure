export type TSignIn = {
  id: string;
  pwd: string;
};

export type TSignUp = TSignIn & {
  name: string;
};

export type TSign = {
  error: string;
};
