import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TUser, TUserAction, TCheckSuccessAction, TCheckFailureAction } from './types';
import { CHECK_SUCCESS, CHECK_FAILURE } from './actions';

const initialState: TUser = {
  userId: '',
  error: '',
};

const sign = createReducer<TUser, TUserAction>(initialState, {
  [CHECK_SUCCESS]: (state, action: TCheckSuccessAction) =>
    produce(state, (draft) => {
      draft.userId = action.payload.userId;
      draft.error = '';
    }),
  [CHECK_FAILURE]: (state, action: TCheckFailureAction) =>
    produce(state, (draft) => {
      draft.error = action.payload;
      draft.userId = '';
    }),
});

export default sign;
