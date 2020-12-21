import { takeEvery, put, take, call, all, getContext} from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import axios from 'axios';
import * as sign from './actions';
import * as snackbar from '../snackbar/actions'

function signInApi(id, password){
    return true;
}

function signOutApi(id){
    return true;
}

// SignIn - SignOut SAGA
export function* signFlow(){
    const history = yield getContext('history');
    while(true){
        const signInAction = yield take(sign.SIGN_IN);
        // const userInfo = yield call(signInApi, id, password);
        const userId = localStorage.getItem("userId") || "";
        if(userId == "" || signInAction.payload.id != userId){
            yield put(sign.sign_in_fail());
            yield put(snackbar.snackbar_call({
                open: true,
                duration: 3000,
                type: "error",
                message: "로그인 실패."
            }));
        }else{
            history.push("/home")
            yield put(sign.sign_in_success(signInAction.payload.id));
            yield put(snackbar.snackbar_call({
                open: true,
                duration: 3000,
                type: "success",
                message: "로그인 성공."
            }));
            
            yield take(sign.SIGN_OUT);
            // yield call(signOutApi, id);
            yield put(sign.sign_out_success());
            yield put(snackbar.snackbar_call({
                open: true,
                duration: 3000,
                type: "success",
                message: "로그아웃 성공."
            }));
        }
    }
}

// 회원가입 SAGA
function* signUpSaga(action:ActionType<typeof sign.sign_up>){
    try{
        const history = yield getContext('history');
        // const {data} = yield axios.post(process.env.SIGN_UP_URL, action.payload);
        const userId = localStorage.getItem("userId") || "";

        if(userId == "" || action.payload.id != userId){
            localStorage.setItem("userId", action.payload.id);
            yield all([
                put(sign.sign_up_success()),
                put(snackbar.snackbar_call({
                    open: true,
                    duration: 3000,
                    type: "success",
                    message: "회원가입 성공."
                }))
            ]);
            history.push("/signIn")
    
        }else{
            yield put(sign.sign_up_fail());
            yield put(snackbar.snackbar_call({
                open: true,
                duration: 3000,
                type: "error",
                message: "회원가입 실패."
            }));
        }

    }catch(error){
        yield put(sign.sign_up_fail());
        yield put(snackbar.snackbar_call({
            open: true,
            duration: 3000,
            type: "error",
            message: "회원가입 실패."
        }));
        //error 액션 정의
    }
}

export function* watchSignUp(){
    yield takeEvery(sign.SIGN_UP, signUpSaga);
}