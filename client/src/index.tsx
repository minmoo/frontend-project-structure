import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import createStore from './configs/store/ConfigureStore';
import CustomThemeProvider from './configs/themes/ThemeProvider';
// import CustomSnackbarProvider from './common/snackbar/SnackbarProvider';
// import ContextSnackbar from './common/snackbar/provider/ContextSnackbar';
import CustomSnackbar from './components/common/snackbar/container/CustomSnackbar';
import App from './App';
import { check } from './modules/user/actions';
import GlobalStyles from './configs/themes/GlobalStyles';

const store = createStore();

//새로고침 로그인 유지
function loadUser() {
  try {
    const userId = localStorage.getItem('userId');
    if (!userId) return; //로그인 상태가 아니라면 pass

    store.dispatch(check(userId));
  } catch (e) {
    console.log('localStorage is not working');
  }
}
loadUser();

ReactDom.render(
  <CustomThemeProvider>
    <GlobalStyles />
    <Provider store={store}>
      <HelmetProvider>
        {/* <CustomSnackbarProvider>
          <ContextSnackbar/>
                  <App />
              </CustomSnackbarProvider> */}
        <App />
        <CustomSnackbar />
      </HelmetProvider>
    </Provider>
  </CustomThemeProvider>,
  document.getElementById('app'),
);
