import rootReducer, { rootSaga } from '../../modules';
import createSagaMiddelware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddelware({
  context: {
    history: customHistory,
  },
}); //SAGA 미들웨어 생성

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
