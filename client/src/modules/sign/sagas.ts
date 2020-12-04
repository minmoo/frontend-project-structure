import { takeEvery, put, take, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as sign from './actions';

function signInApi(id, password){
    return true;
}

function signOutApi(id){
    return true;
}

export function* signFlow(){
    while(true){
        const {id, password} = yield take(sign.SIGN_IN);
        const userInfo = yield call(signInApi, id, password);
        // yield put()
        yield take(sign.SIGN_OUT);
        yield call(signOutApi, id);
        //yield put()
    }
}


function* signUpSaga(action:ActionType<typeof sign.sign_up>){
    try{

    }catch(error){
        //error 액션 정의
    }
}

export function* watchSignUp(){
    yield takeEvery(sign.SIGN_UP, signUpSaga);
}