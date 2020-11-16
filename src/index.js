import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots, requestRobots} from './reducer.js';
import 'tachyons';

const rootReducer = combineReducers({searchRobots, requestRobots})
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
             <Provider store= {store} >
	          <App />
	         </Provider>, document.getElementById('root'));
registerServiceWorker();
