// import { compose, applyMiddleware } from 'redux';
// import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middlewares : any = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// const composedEnhancers = compose(applyMiddleware(...middlewares));

// export const store = createStore(RootReducer, undefined, composedEnhancers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});