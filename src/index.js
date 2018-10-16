import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeNavbar from './components/Homepage/homeNavbar';
import Login from './components/Homepage/login';
import SignUp from './components/Homepage/signUp';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    // <Provider store={store}>
    //     <App />
    // </Provider>
    <BrowserRouter>
        <div>
            <Route path="/" component={HomeNavbar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
