require('babel-polyfill');
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { repositoryApp } from './reducers/index'
import { addRepository, rateRepository } from './actions/index'
import RepositoryList from './components/repository-list'
require('../font-awesome/css/font-awesome.css');

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
	<RepositoryList repoList={repoList}/>,
  	document.getElementById('app')
);