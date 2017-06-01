require('babel-polyfill');

import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'

import { addRepository, rateRepository } from './actions/index'
import { repositoryApp } from './reducers/index'

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

let store = createStore(repositoryApp);

render(
	<h1>HI</h1>,
  	document.getElementById('root')
);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

store.dispatch(addRepository('First repo'));
store.dispatch(addRepository('2nd repo'));
store.dispatch(addRepository('3rd repo'));
store.dispatch(rateRepository('2nd repo', 5));
store.dispatch(rateRepository('First repo', 2));

unsubscribe();