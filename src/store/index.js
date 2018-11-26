import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import appReducer from '../reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware, logger ];

export default function configureStore(initialState={}) {

    const store = createStore(
      appReducer,
      initialState,
      applyMiddleware(...middlewares));

      sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
