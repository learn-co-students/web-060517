import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'


import todosReducer from './reducers/todosReducer'




const store = createStore(todosReducer, applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
