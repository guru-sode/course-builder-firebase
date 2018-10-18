import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import firebaseConfig from '../config/firebaseConfig';

/* for connect the app with firebase redux store */
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

/* enhance the store with reactReduxFirebase */
const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware.withExtraArgument({ getFirebase })),
    reactReduxFirebase(firebaseConfig, { useFirebaseProfile: true, userProfile: 'users', attachAuthIsReady: true })
)(createStore);

const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
