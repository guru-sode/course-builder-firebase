import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import createCourse from './redux/reducers/courseReducer';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { Provider } from 'react-redux';
||||||| merged common ancestors
=======
import { Provider } from 'react-redux';
import store from './redux/store';
>>>>>>> firebase

<<<<<<< HEAD
const store = createStore(createCourse, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
||||||| merged common ancestors
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
>>>>>>> firebase

serviceWorker.unregister();
