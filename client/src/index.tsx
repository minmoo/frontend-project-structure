import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './configs/ConfigureStore';
import CustomThemeProvider from './configs/CustomThemeProvider';
import App from './App';

const store = ConfigureStore();

ReactDom.render(
    <CustomThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CustomThemeProvider>,
	document.getElementById('app')
);
