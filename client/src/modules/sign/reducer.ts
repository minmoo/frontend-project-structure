import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { TSign, TSignAction } from './types';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './actions';

const initialState: TSign = {
	id: "",
	name: ""
};

const websocket = createReducer<TSign, TSignAction>(initialState, {
	[SIGN_IN]: (state, action) =>
		produce(state, (draft) => {
			draft;
		}),
	[SIGN_OUT]: (state, action) =>
		produce(state, (draft) => {
			draft;
		}),
	[SIGN_UP]: (state, action) =>
		produce(state, (draft) => {
			draft;
		}),
});

export default websocket;
