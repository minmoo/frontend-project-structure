import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { ReactElement, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../modules';
import { useSnackbarCall } from '../../../../modules/snackbar/hooks';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(): ReactElement {
  const snackbar = useSelector((state: RootState) => state.snackbar);
  const onSnackbarCall = useSnackbarCall();

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason == 'clickaway') {
      return;
    }
    onSnackbarCall({
      open: false,
      duration: snackbar.duration,
      message: snackbar.message,
      type: snackbar.type,
    });
  };

  return (
    <Snackbar open={snackbar.open} autoHideDuration={snackbar.duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={snackbar.type}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
