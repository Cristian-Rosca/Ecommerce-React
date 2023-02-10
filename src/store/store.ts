import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';

import { RootReducer } from './root-reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(RootReducer, undefined, composedEnhancers);