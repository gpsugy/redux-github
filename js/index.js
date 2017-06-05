require('babel-polyfill');

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { render } from 'react-dom'
import React from 'react'

import { repositoryApp } from './reducers/index'
import App from './components/app';

var repoList = [
	{
		id: 0,
		name: '1st repo',
		rating: null
	},
	{
		id: 1,
		name: '2nd repo',
		rating: 4
	}
];

const loggerMiddleware = createLogger();

const store = createStore(
	repositoryApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
  	document.getElementById('root')
);

// console.log(store.getState());

// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState())
// );

// store.dispatch(addRepository('First repo'));
// store.dispatch(addRepository('2nd repo'));
// store.dispatch(addRepository('3rd repo'));
// store.dispatch(rateRepository('2nd repo', 5));
// store.dispatch(rateRepository('First repo', 2));

// unsubscribe();