import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSign} from './types';

const name = "sign";

const initialState: TSign = {
    error: '',
};

const reducers = {
    signInSuccess(state, action:PayloadAction<string>){
        state.error = '';
    },
    signInFail(state){
        state.error = 'Y';
    },
    signOutSucess(state){
        state.error = '';
    },
    signUpSuccess(state){
        state.error = '';
    },
    signUpFail(state){
        state.error = 'Y';
    }
}

const signSlice = createSlice({
    name,
    initialState,
    reducers
});

export default signSlice.reducer;
export const actions = signSlice.actions;


