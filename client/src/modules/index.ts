import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import layout from './layout';
import websocket from './websocket';
import sign from './sign';
import snackbar from './snackbar';

import {flow} from './websocket/sagas';
import {watchSignUp, signFlow} from './sign/sagas';

const rootReducer = combineReducers({
    layout,
    websocket,
    sign,
    snackbar
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([fork(flow), fork(watchSignUp), fork(signFlow)]);
};



