import {createAction} from 'typesafe-actions';

export const CONNECT = 'websocket/CONNECT';
export const DISCONNECT = 'websocket/DISCONNECT';
export const SET_SOCKET_ID = 'websocket/SET_SOCKET_ID';
export const SEND_MESSAGE = 'websocket/SEND_MESSAGE';

export const connect = createAction(CONNECT)();
export const disconnect = createAction(DISCONNECT)();
export const set_socket_id = createAction(SET_SOCKET_ID)<string>();
export const send_message = createAction(SEND_MESSAGE)<string>();
