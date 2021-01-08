import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TSign, TSignAction } from './types';
import { SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT_SUCCESS } from './actions';

const initialState: TSign = {
  error: '',
};

const sign = createReducer<TSign, TSignAction>(initialState, {
  [SIGN_IN_SUCCESS]: (state, { payload: id }) =>
    produce(state, (draft) => {
      draft.error = '';
    }),
  [SIGN_IN_FAIL]: (state) =>
    produce(state, (draft) => {
      draft.error = 'Y';
    }),
  //SIGN_OUT은 SUCCESS가 중요하지 않다.
  [SIGN_OUT_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.error = '';
    }),
  [SIGN_UP_SUCCESS]: (state) =>
    produce(state, (draft) => {
      draft.error = '';
    }),
  [SIGN_UP_FAIL]: (state) =>
    produce(state, (draft) => {
      draft.error = 'Y';
    }),
});

export default sign;
