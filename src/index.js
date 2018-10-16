import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    // <Provider store={store}>
    //     <BrowserRouter>
    //         <div>
    //             <Route path="/" component={HomeNavbar} />
    //             <Route exact path="/login" component={Login} />
    //             <Route exact path="/signup" component={SignUp} />
    //         </div>
    //     </BrowserRouter>
    // </Provider >
    , document.getElementById('root'));

serviceWorker.unregister();
