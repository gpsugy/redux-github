require('babel-polyfill');

require('../font-awesome/css/font-awesome.css');

import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'

import { addRepository, rateRepository } from './actions/index'
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

render(
	<App repoList={repoList}/>,
  	document.getElementById('root')
);