import sign, {actions} from '../slice';
import * as snackbar from '../../snackbar/actions';
import * as user from '../../user/actions';
import {signIn,signUp, signInApi, watchSignIn, signUpApi, signUpSaga} from '../sagas';
import {renderHook, act} from '@testing-library/react-hooks';
import { expectSaga} from 'redux-saga-test-plan';
import {throwError} from 'redux-saga-test-plan/providers';
import {call, getContext} from 'redux-saga/effects';


//action test
describe("actions", ()=>{
    test('should create an action to sign_in ', () => {
        const payload = {
            id: "minsu",
            pwd: "123"
        }
        const expectedAction = {
            type: signIn.type,
            payload
        }

        expect(signIn(payload)).toEqual(expectedAction);
    })
});

//reducer test
describe("reducer", () => {
    test('has initial state', () => {
        expect(sign(undefined, {type: '@@INIT'})).toEqual({"error": ""});
    });

    test('handle sign in fail', () => {
        const state = sign({error: ""}, actions.signInFail());
        expect(state).toEqual({error: "Y"});
    });
});

//hook test
// describe("hook", () => {
//     test('sign in hook test', () => {
//         const {result} = renderHook(() => useSignIn());

//         act(() => {
//             result.current({id: "minsu", pwd: "123"});
//         });
//     })
// })

describe("redux-saga test plan", () => {
    test("sign in test", () => {
        const payload = {
            id: "minsu",
            pwd: "123"
        }

        const possible = true;

        const snackbarOption = {
            open: true,
            duration: 3000,
            type: 'success',
            message: '로그인 성공.'
          }

          //SAGA 테스트
        // return expectSaga(signInSaga, actions.sign_in(payload))
        //     .withReducer(sign)  //Reducer를 함께 테스트
        //     .provide([ //mocking
        //         [getContext("history"), []],
        //         [call(signInApi, payload.id, payload.pwd), true] //로그인 성공 만들기
        //     ])
        //     .put(actions.sign_in_success(payload.id))
        //     .put({type: snackbar.SNACKBAR_CALL, payload: snackbarOption})
        //     .put(user.check(payload.id))
        //     .hasFinalState({    //state의 최종 상태 확인
        //         error: ''
        //     })
        //     .run();

        //watch TEST
           return expectSaga(watchSignIn)
            .dispatch(signIn(payload))
            .withReducer(sign)  //Reducer를 함께 테스트
            .provide([ //mocking
                [getContext("history"), []],
                [call(signInApi, payload.id, payload.pwd), true] //로그인 성공 만들기
            ])
            .put(actions.signInSuccess(payload.id))
            .put({type: snackbar.SNACKBAR_CALL, payload: snackbarOption})
            .put(user.check(payload.id))
            .hasFinalState({    //state의 최종 상태 확인
                error: ''
            })
            .silentRun(); //watchSingIn은 무한루프기 때문에 타임아웃 에러가 무조건 발생한다. 그래서 silentRun사용
    }),
    
    test("sign up test", () => {
        const error = new Error("error");
        const payload = {
            id: "minsu",
            pwd: "123",
            name:"minsu"
        } 
        
        return expectSaga(signUpSaga, signUp(payload))
        .provide([
            [call(signUpApi, "minsu"), throwError(error)]
        ])
        .put(actions.signUpFail())
        .run()
    })
})

