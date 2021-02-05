import rootReducer, { rootSaga } from '../../modules';
import createSagaMiddelware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddelware({
  context: {
    history: customHistory,
  },
}); //SAGA 미들웨어 생성

// const configureStore = (): ReturnType<typeof createStore> => {
//   const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

//   sagaMiddleware.run(rootSaga);

//   return store;
// };
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default createStore;
