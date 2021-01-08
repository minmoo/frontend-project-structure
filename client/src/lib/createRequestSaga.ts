// import { call, put } from 'redux-saga/effects';
// import { start_loading, finish_loading } from '../modules/loading';

// export default function createRequestSaga(type: string, request) {
//   const SUCCESS = `${type}_SUCCESS`;
//   const FAILURE = `${type}_FAILURE`;

//   return function* (action) {
//     yield put(start_loading(type)); //로딩 시작
//     try {
//       const response = yield call(request, action.payload);
//       yield put({
//         type: SUCCESS,
//         payload: response.data,
//       });
//     } catch (e) {
//       yield put({
//         type: FAILURE,
//         payload: e,
//         error: true,
//       });
//     }
//     yield put(finish_loading(type)); //로딩 끝
//   };
// }

export const createRequestActionTypes = (type: string): string[] => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
