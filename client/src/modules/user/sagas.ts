import { put, takeLatest, getContext } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as user from './actions';

function checkApi(id) {
  if (id) {
    return true;
  }
  return false;
}

function* userCheckSaga(action: ActionType<typeof user.check>) {
  const history = yield getContext('history');
  try {
    const userId = action.payload;
    if (checkApi(userId)) {
      yield put(
        user.checkSuccess({
          userId: userId,
          error: '',
        }),
      );
    } else {
      yield put(user.checkFailure('user check error!'));
      history.push('/signIn');
    }
  } catch (e) {
    yield put(user.checkFailure('user check error!'));
    history.push('/signIn');
  }
}

export default function* watchCheck() {
  yield takeLatest(user.CHECK, userCheckSaga);
}

