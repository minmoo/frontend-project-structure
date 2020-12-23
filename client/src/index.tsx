import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './common/ConfigureStore';
import CustomThemeProvider from './common/theme/ThemeProvider';
// import CustomSnackbarProvider from './common/snackbar/SnackbarProvider';
// import ContextSnackbar from './common/snackbar/provider/ContextSnackbar';
import CustomSnackbar from './common/snackbar/CustomSnackbar';
import App from './App';

const store = ConfigureStore();

ReactDom.render(
  <CustomThemeProvider>
    <Provider store={store}>
      {/* <CustomSnackbarProvider>
        <ContextSnackbar/>
                <App />
            </CustomSnackbarProvider> */}
      <App />
      <CustomSnackbar />
    </Provider>
  </CustomThemeProvider>,
  document.getElementById('app'),
);
