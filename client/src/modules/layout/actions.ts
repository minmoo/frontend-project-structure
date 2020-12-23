import { createAction } from 'typesafe-actions';

export const NAVBAR_TOGGLE = 'layout/NAVBAR_TOGGLE';

export const navbar_toggle = createAction(NAVBAR_TOGGLE)();
