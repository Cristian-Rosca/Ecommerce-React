import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { RootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, RootReducer);

const middlewares : any = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);