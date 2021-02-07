import { combineReducers } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';
import layout from './layout';
import websocket from './websocket';
import sign from './sign';
import snackbar from './snackbar';
import user from './user';
// import loading from './loading';

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

/*
 Auto load Sagas default
*/
const sagaContexts = require.context('.', true, /.*(sagas.ts)$/i); // imports all ~sagas.ts file

export function* rootSaga(): Generator {
  yield all(
    sagaContexts.keys().map((filename) => {
      if(sagaContexts(filename).default){
        return fork(sagaContexts(filename).default)
      }
    })
  );
}