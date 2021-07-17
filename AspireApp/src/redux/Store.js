import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [thunk];
if (__DEV__) {
  middlewares.push(createLogger({}));
}

function configureStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(...middlewares));
}

const Store = configureStore({});
export default Store;
