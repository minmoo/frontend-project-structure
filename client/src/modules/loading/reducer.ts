import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TLoading, TLoadingAction } from './types';
import { START_LOADING, FINISH_LOADING } from './actions';

const initialState: TLoading = {};

const loading = createReducer<TLoading, TLoadingAction>(initialState, {
  [START_LOADING]: (state, action) =>
    produce(state, (draft) => {
      const key = action.payload;
      draft[key] = true;
    }),
  [FINISH_LOADING]: (state, action) =>
    produce(state, (draft) => {
      const key = action.payload;
      draft[key] = false;
    }),
});

export default loading;
