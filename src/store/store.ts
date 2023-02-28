// import { compose, applyMiddleware } from 'redux';
// import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

const middlewares : Middleware[] = [process.env.NODE_ENV === 'development' && logger].filter((middleware) : middleware is Middleware => Boolean(middleware)); // PREDICATE TYPE

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});