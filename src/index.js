import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        
        , document.getElementById('root'));
    serviceWorker.unregister();
});


