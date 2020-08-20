import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import * as api from '../network/api/index.js';

import { isDev } from '../utils/env';
import immutableStateTransformer from '../utils/immutableStateTransformer.js';

import authMiddleware from './middleware/auth.js';
import errorMiddleware from './middleware/error.js';
import crashMiddleware from './middleware/crash.js';
//import searchMiddleware from './middleware/search.js';

import rootReducer from './reducers.js';

// State Keys
import { STATE_KEY as AUTH_STATE_KEY } from './Auth/reducer.js';
import { STATE_KEY as ME_STATE_KEY } from './Me/reducer.js';

/**
 * @constant persistConfig config for persist who handle localStorage with the whitelist
 * @desc every state that you want to store in localStorage
 * @public
 * @version 1.0
 * @since 1.0
 */
export const persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage: storage,
    whitelist: [
        // States
        AUTH_STATE_KEY,
        ME_STATE_KEY,
    ],
    version: 5,
};

/**
 * @constant logger logger
 * @desc Logger human readable immutable object
 * @private
 * @version 1.0
 * @since 1.0
 */
const logger = createLogger({
    logErrors: true,
    diff: true,
    stateTransformer: immutableStateTransformer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);
/**
 * @function configureStore
 * @desc create the redux store with every middleware, reducer, tools and persist
 * @public
 * @version 1.0
 * @since 1.0
 * @desc generate the redux store
 * @return {object} store and persistor
 */
export default function configureStore(history) {
    const middleware = [
        routerMiddleware(history),
        thunkMiddleware.withExtraArgument({ api }),
        authMiddleware,
        errorMiddleware,
        crashMiddleware,
        promise,
        isDev() && logger,
    ].filter(Boolean);

    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(
            ...middleware)
        ),
    );

    const persistor = persistStore(store);

    return { store, persistor };
}
