import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

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

export type TSignAction = ActionType<typeof actions>;
