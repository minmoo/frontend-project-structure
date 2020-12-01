import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import layout from './layout';
import websocket from './websocket';
import {flow} from './websocket/sagas';

const rootReducer = combineReducers({
    layout,
    websocket
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([fork(flow)]);
};



