import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { repositoryApp } from './reducers';

export const loggerMiddleware = createLogger();

export const store = createStore(
	repositoryApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);