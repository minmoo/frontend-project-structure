import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './common/ConfigureStore';
import CustomThemeProvider from './common/theme/ThemeProvider';
import CustomSnackbarProvider from './common/snackbar/SnackbarProvider';
import CustomizedSnackbar from './common/snackbar/CustomizedSnackbar';
import App from './App';

const store = ConfigureStore();

ReactDom.render(
    <CustomThemeProvider>
        <Provider store={store}>
            <CustomSnackbarProvider>
                <App />
                <CustomizedSnackbar/>
            </CustomSnackbarProvider>
        </Provider>
    </CustomThemeProvider>,
	document.getElementById('app')
);
