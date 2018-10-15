import authReducer from './authReducer';
import sectionReducer from './sectionReducer';
import courseReducer from './courseReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
/*  firebase reducer for synchronize the firebase */
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    sections: sectionReducer,
    courses: courseReducer,
    users: userReducer,
    firebase: firebaseReducer
});

export default rootReducer;

