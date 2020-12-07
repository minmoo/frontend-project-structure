import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './configs/ConfigureStore';
import CustomThemeProvider from './configs/CustomThemeProvider';
import CustomSnackbarProvider from './configs/CustomSnackbarProvider';
import App from './App';

const store = ConfigureStore();

ReactDom.render(
    <CustomThemeProvider>
        <Provider store={store}>
            <CustomSnackbarProvider>
                <App />
            </CustomSnackbarProvider>
        </Provider>
    </CustomThemeProvider>,
	document.getElementById('app')
);
