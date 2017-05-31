require('babel-polyfill');
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { repositoryApp } from './reducers/index'
import { addRepository, rateRepository } from './actions/index'
import RepositoryList from './components/repository-list'

render(
	<RepositoryList />,
  	document.getElementById('app')
);