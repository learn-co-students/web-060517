import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import todoReducer from './reducers/todosReducer'
import addTodo from './actions/todos'
import logger from 'redux-logger'

// WE USE THE REDUX LIBRARY CREATE STORE TO MAKE OUR STORE OUT OF OUR REDUCER
const store = createStore(todoReducer, applyMiddleware(logger))











const todos = store.getState()



store.dispatch(addTodo("Iron Clothes"))
//
//
// store.dispatch({type:"REMOVE_TOD", todo: 1})
// store.dispatch({type:"BEEF", todo: 1})



// HOMEWORK: READ TUTORIAL
// HOW DOES REDUX TALK TO REACT


/// TODO: WHAT DO I NEED FOR REDUX

// actions - these are instructions we will send to our reducers
// For example in a todo list you may have had some function/method called 'addTodo'
// this will become an action

// reducers - these will respond to our actions

// All of our information will live in something called our store { bankVault }
// Our reducer is our bank employee
// Our action is our request

ReactDOM.render(<App store={store} todos={todos} />, document.getElementById('root'));
registerServiceWorker();
