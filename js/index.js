require('babel-polyfill');
import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { repositoryReducer } from './reducers/index'

// let store = createStore(repositoryReducer);

render(
	<h1>HI</h1>,
  	document.getElementById('app')
);

