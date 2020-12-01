import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {navbar_toggle} from './actions';

export const useNavbarToggle = () => {
    const dispatch = useDispatch();
    const onNavbarToggle = useCallback(() => dispatch(navbar_toggle()), [dispatch]);
    return onNavbarToggle;
};