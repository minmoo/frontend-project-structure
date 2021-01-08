import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import layout from './layout';
import websocket from './websocket';
import sign from './sign';
import snackbar from './snackbar';
import user from './user';
// import loading from './loading';

import { flow } from './websocket/sagas';
import { watchSignUp, watchSignIn, watchSignOut } from './sign/sagas';
import { watchCheck } from './user/sagas';

const rootReducer = combineReducers({
  layout,
  websocket,
  sign,
  snackbar,
  user,
  // loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(): Generator {
  yield all([fork(flow), fork(watchSignUp), fork(watchSignIn), fork(watchSignOut), fork(watchCheck)]);
}
