import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TWebSocket, TWebSocketAction } from './types';
import { CONNECT, DISCONNECT, SET_SOCKET_ID, SERVER_DATA } from './actions';

const initialState: TWebSocket = {
  isConnected: false,
  socketId: '',
  data: '',
};

const websocket = createReducer<TWebSocket, TWebSocketAction>(initialState, {
  [CONNECT]: (state) =>
    produce(state, (draft) => {
      draft.isConnected = true;
    }),
  [DISCONNECT]: (state) =>
    produce(state, (draft) => {
      draft.isConnected = false;
      draft.socketId = '';
    }),
  [SET_SOCKET_ID]: (state, { payload: socketId }) =>
    produce(state, (draft) => {
      draft.socketId = socketId;
    }),
  [SERVER_DATA]: (state, { payload: data }) =>
    produce(state, (draft) => {
      draft.data = data;
    }),
});

export default websocket;
