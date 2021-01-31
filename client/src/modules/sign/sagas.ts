import { takeEvery, put, take, all, getContext, takeLatest, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as sign from './actions';
import * as snackbar from '../snackbar/actions';
import * as user from '../user/actions';

export function signInApi(id, password) {
  const userId = localStorage.getItem('userId') || '';
  if(userId == '' || id != userId){
    return false;
  }
  return true;
}

export function signUpApi(id){
  const userId = localStorage.getItem('userId') || '';
  if(userId == '' || id != userId){
    return true;
  }
  return false;
}

function signOutApi(id) {
  return true;
}

// SignIn - SignOut SAGA
// export function* signFlow() {
//   const history = yield getContext('history' as string);
//   while (true) {
//     const signInAction = yield take(sign.SIGN_IN);
//     // const userInfo = yield call(signInApi, id, password);
//     const userId = localStorage.getItem('userId') || '';
//     if (userId == '' || signInAction.payload.id != userId) {
//       yield put(sign.sign_in_fail());
//       yield put(
//         snackbar.snackbar_call({
//           open: true,
//           duration: 3000,
//           type: 'error',
//           message: '로그인 실패.',
//         }),
//       );
//     } else {
//       history.push('/home');
//       yield put(sign.sign_in_success(signInAction.payload.id));
//       yield put(
//         snackbar.snackbar_call({
//           open: true,
//           duration: 3000,
//           type: 'success',
//           message: '로그인 성공.',
//         }),
//       );
//       yield put(user.check(signInAction.payload.id));

//       yield take(sign.SIGN_OUT);
//       // yield call(signOutApi, id);
//       yield put(sign.sign_out_success());
//       yield put(
//         snackbar.snackbar_call({
//           open: true,
//           duration: 3000,
//           type: 'success',
//           message: '로그아웃 성공.',
//         }),
//       );
//     }
//   }
// }

export function* signInSaga(action: ActionType<typeof sign.sign_in>) {
  const history = yield getContext('history' as string);
  const possible = yield call(signInApi, action.payload.id, action.payload.pwd);

  if(possible){
    history.push('/home');
    yield put(sign.sign_in_success(action.payload.id));
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
    yield put(sign.sign_in_fail());
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
  yield takeLatest(sign.SIGN_IN, signInSaga);
}

export function* signOutSaga() {
  localStorage.setItem('userId', '');
  yield put(sign.sign_out_success());
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
  yield takeLatest(sign.SIGN_OUT, signOutSaga);
}

// 회원가입 SAGA
export function* signUpSaga(action: ActionType<typeof sign.sign_up>) {
  try {
    const history = yield getContext('history');
    // const {data} = yield axios.post(process.env.SIGN_UP_URL, action.payload);
    const possible = yield call(signUpApi, action.payload.id);

    if(possible){
      localStorage.setItem('userId', action.payload.id);
      yield all([
        put(sign.sign_up_success()),
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
      yield put(sign.sign_up_fail());
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
    yield put(sign.sign_up_fail());
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
  yield takeEvery(sign.SIGN_UP, signUpSaga);
}
