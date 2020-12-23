import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TSnackbar, TSnackbarAction } from './types';
import { SNACKBAR_CALL } from './actions';
import { Color } from '@material-ui/lab/Alert';

const initialState: TSnackbar = {
  open: false,
  message: '',
  type: '' as Color,
  duration: 3000,
};

const websocket = createReducer<TSnackbar, TSnackbarAction>(initialState, {
  [SNACKBAR_CALL]: (state, action) =>
    produce(state, (draft) => {
      draft.open = action.payload.open;
      draft.message = action.payload.message;
      draft.type = action.payload.type;
      draft.duration = action.payload.duration;
    }),
});

export default websocket;
