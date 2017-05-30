import { createStore } from 'redux'
import repositoryReducer from './reducers/index'
let store = createStore(repositoryReducer);