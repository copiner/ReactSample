import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from '../reducer';

export default function configureStore(initialState={}) {

    const middlewares = [ /*logger,*/thunk ];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer,initialState,middlewareEnhancer);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
       module.hot.accept('../reducer', () => store.replaceReducer(rootReducer))
     }

    return store;
}
