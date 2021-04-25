import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import mainReducer from './mainReducer';

const loggerMiddleware = createLogger();

export const store = createStore(
    mainReducer,
    applyMiddleware(
        loggerMiddleware
    )
);