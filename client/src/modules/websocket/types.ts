import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TWebSocket = {
	isConnected: boolean;
	socketId: string;
};

export type TWebSocketAction = ActionType<typeof actions>;
