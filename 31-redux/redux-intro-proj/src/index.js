import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import todoReducer from './reducers/todoReducer'
import booksReducer from './reducers/booksReducer'
const reducer = combineReducers({ todos: todoReducer, books: booksReducer})
console.log(reducer)

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
