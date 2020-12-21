import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TSign, TSignAction } from './types';
import { SIGN_IN, SIGN_OUT, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT_SUCCESS } from './actions';

const initialState: TSign = {
	signSuccess: "",
	id: "",
	name: ""
};

const websocket = createReducer<TSign, TSignAction>(initialState, {
	[SIGN_IN]: (state, action) =>
		produce(state, (draft) => {
			draft;
		}),
	[SIGN_IN_SUCCESS]: (state, action) =>
		produce(state, (draft) => {
			draft.signSuccess = "Y";
			draft.id = action.payload;
		}),
	[SIGN_IN_FAIL]: (state, action) =>
		produce(state, (draft) => {
			draft.signSuccess = "N";
		}),
	[SIGN_OUT]: (state, action) =>
		produce(state, (draft) => {
			draft
		}),
	[SIGN_OUT_SUCCESS]: (state, action) =>
		produce(state, (draft) => {
			draft.signSuccess="Y";
			draft.id = '';
		}),
	[SIGN_UP]: (state, action) =>
		produce(state, (draft) => {
			draft;
		}),
	[SIGN_UP_SUCCESS]: (state, action) =>
		produce(state, (draft) => {
			draft.signSuccess = "Y";
		}),
	[SIGN_UP_FAIL]: (state, action) =>
		produce(state, (draft) => {
			draft.signSuccess = "N";
		}),
});

export default websocket;
