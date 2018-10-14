import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import firebaseConfig from '../config/firebaseConfig';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase })),
    reactReduxFirebase(firebaseConfig)
)(createStore);

const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
