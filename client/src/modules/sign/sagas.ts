import { takeEvery, put, all, getContext, takeLatest, call, fork } from 'redux-saga/effects';
import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {TSignIn, TSignUp} from './types';
import {actions} from './slice';
import * as snackbar from '../snackbar/actions';
import * as user from '../user/actions';
import * as api from '../../lib/api/sign';

//비동기 watch액션 만들기
export const signIn = createAction<TSignIn>("sign/signIn");
export const signOut = createAction("sign/signOut");
export const signUp = createAction<TSignUp>("sign/signUp");

export function* signInSaga(action: PayloadAction<TSignIn>) {
  const history = yield getContext('history' as string);
  const possible = yield call(api.signIn, {id: action.payload.id, pwd:action.payload.pwd});

  if(possible){
    history.push('/home');
    yield put(actions.signInSuccess(action.payload.id));
    yield put(
      snackbar.snackbar_call({
        open: true,
        duration: 3000,
        type: 'success',
        message: '로그인 성공.',
      }),
    );
    yield put(user.check(action.payload.id));

  }else{
    yield put(actions.signInFail());
    yield put(
      snackbar.snackbar_call({
        open: true,
        duration: 3000,
        type: 'error',
        message: '로그인 실패.',
      }),
    );
  }
}

export function* watchSignIn() {
  yield takeLatest(signIn, signInSaga);
}

export function* signOutSaga() {
  localStorage.setItem('userId', '');
  yield put(actions.signOutSucess());
  yield put(
    snackbar.snackbar_call({
      open: true,
      duration: 3000,
      type: 'success',
      message: '로그아웃 성공.',
    }),
  );
  yield put(user.check(''));
}

export function* watchSignOut() {
  yield takeLatest(signOut, signOutSaga);
}

// 회원가입 SAGA
export function* signUpSaga(action: PayloadAction<TSignUp>) {
  try {
    const history = yield getContext('history');
    // const {data} = yield axios.post(process.env.SIGN_UP_URL, action.payload);
    const possible = yield call(api.signUp, {id:action.payload.id, pwd:action.payload.pwd});

    if(possible){
      localStorage.setItem('userId', action.payload.id);
      yield all([
        put(actions.signUpSuccess()),
        put(
          snackbar.snackbar_call({
            open: true,
            duration: 3000,
            type: 'success',
            message: '회원가입 성공.',
          }),
        ),
      ]);
      history.push('/signIn');
    } else {
      yield put(actions.signUpFail());
      yield put(
        snackbar.snackbar_call({
          open: true,
          duration: 3000,
          type: 'error',
          message: '회원가입 실패.',
        }),
      );
    }
  } catch (error) {
    yield put(actions.signUpFail());
    yield put(
      snackbar.snackbar_call({
        open: true,
        duration: 3000,
        type: 'error',
        message: '회원가입 실패.',
      }),
    );
    //error 액션 정의
  }
}

export function* watchSignUp() {
  yield takeEvery(signUp, signUpSaga);
}

export default function* signRootSaga(): Generator {
  yield all([fork(watchSignIn), fork(watchSignUp), fork(watchSignOut)]);
}
