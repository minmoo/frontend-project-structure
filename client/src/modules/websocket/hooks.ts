import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {connect} from './actions';

export const useWsConnect = () => {
    const dispatch = useDispatch();
    const onConnect = useCallback(() => dispatch(connect()), [dispatch]);
    return onConnect;
};