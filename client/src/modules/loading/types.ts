import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TLoading = {
  [key: string]: boolean;
};

export type TLoadingAction = ActionType<typeof actions>;
