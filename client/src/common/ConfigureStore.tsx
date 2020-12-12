import { createStore, applyMiddleware } from 'redux';
import rootReducer, {rootSaga} from '../modules';
import createSagaMiddelware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const sagaMiddleware = createSagaMiddelware();

const configureStore = () => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

	sagaMiddleware.run(rootSaga);

	return store;
};

export default configureStore;
