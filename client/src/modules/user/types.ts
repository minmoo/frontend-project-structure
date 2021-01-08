import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TUser = {
  userId: string;
  error: string;
};

export type TUserAction = ActionType<typeof actions>;
export type TCheckSuccessAction = ReturnType<typeof actions.checkSuccess>;
export type TCheckFailureAction = ReturnType<typeof actions.checkFailure>;
