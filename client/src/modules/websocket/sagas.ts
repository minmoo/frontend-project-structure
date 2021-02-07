import { take, put, call, fork, all, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as ioClient from 'socket.io-client';
import * as ws from './actions';

// allow us connect to a server and return a promise wrapping the result of this connection
// (socket.io returns just a callback)

function connect() {
  //Real life project extract this into an API module
  const socket = ioClient.connect('http://localhost:8081', { transports: ['websocket'] });

  //We need to wrap the socket connection into a promise (socket returns callback)
  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      console.log('connect success');
      resolve({ socket });
    });

    socket.on('connect_error', () => {
      console.log('connect failed');
      reject(new Error('ws:connect_failed'));
    });
  }).catch((error) => ({ socket, error }));
}

function subscribe(socket: SocketIOClient.Socket) {
  return eventChannel((emit) => {
    socket.on('my socket id', (id) => {
      console.log('my socket id: ' + id);
      emit(ws.set_socket_id(id));
    });

    socket.on('disconnect', (e) => {
      emit(ws.disconnect());
    });

    //TODO: Error handle
    socket.on('error', (e) => {
      console.log('Error while trying to connect');
    });

    //Add websocket recieve server data
    socket.on('data', (data) => {
      emit(ws.server_data(data));
    });

    return () => {}; //called on channel closed / cleanup(free resource)
  });
}

function* read(socket: SocketIOClient.Socket) {
  //subscribe to the eventChannel
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(socket: SocketIOClient.Socket) {
  while (true) {
    const { msg } = yield take(ws.SEND_DATA);
    console.log('send msg');
    socket.emit('receive', msg);
  }
}

function* handleIO(socket: SocketIOClient.Socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

export default function* flow() {
  while (true) {
    yield take(ws.CONNECT);
    const { socket, error } = yield call(connect);
    if (socket) {
      console.log('Connection to socket succeed');
      const ioTask = yield fork(handleIO, socket);
      yield take(ws.DISCONNECT);
      yield cancel(ioTask);
      socket.disconnect();
    } else {
      console.log('Connection Error');
    }
  }
}
