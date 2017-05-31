require('babel-polyfill');
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { repositoryApp } from './reducers/index'
import { addRepository, rateRepository } from './actions/index'
import { RepositoryList } from './components/repository-list'

let store = createStore(repositoryApp);

render(
	<h1>HI</h1>,
  	document.getElementById('app')
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