import * as actions from '../actions';
import * as snackbar from '../../snackbar/actions';
import * as user from '../../user/actions';
import sign from '../reducer';
import {useSignIn} from '../hooks';
import {watchSignUp, signInApi, watchSignIn, signUpApi, signUpSaga} from '../sagas';
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
            type: actions.SIGN_IN,
            payload
        }

        expect(actions.sign_in(payload)).toEqual(expectedAction);
    })
});

//reducer test
describe("reducer", () => {
    test('should handle SIGN_IN_FAIL', () => {
        expect(
            sign({error: ''}, {
                type: actions.SIGN_IN_FAIL
            })
        ).toEqual({
            error: 'Y'
        })
    })
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
            .dispatch({type:actions.SIGN_IN, payload: payload})
            .withReducer(sign)  //Reducer를 함께 테스트
            .provide([ //mocking
                [getContext("history"), []],
                [call(signInApi, payload.id, payload.pwd), true] //로그인 성공 만들기
            ])
            .put(actions.sign_in_success(payload.id))
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
        
        return expectSaga(signUpSaga, actions.sign_up(payload))
        .provide([
            [call(signUpApi, "minsu"), throwError(error)]
        ])
        .put(actions.sign_up_fail())
        .run()
    })
})

