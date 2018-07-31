import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import aapReducers from './reducers/index';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
const store = createStore(
                    aapReducers,
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                    applyMiddleware(thunk)
                );
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>
    

, document.getElementById('root'));
registerServiceWorker();
