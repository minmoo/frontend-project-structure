import { ActionType } from 'typesafe-actions';
import { Color } from '@material-ui/lab/Alert';
import * as actions from './actions';

export type TSnackbar = {
  open: boolean;
  message: string;
  type: Color;
  duration: number;
};

export type TSnackbarAction = ActionType<typeof actions>;
