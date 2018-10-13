import authReducer from './authReducer';
import sectionReducer from './sectionReducer';
import courseReducer from './courseReducer';
import userReducer from './userReducer';
import { combineReducer } from 'redux';


const rootReducer = combineReducer({
    auth: authReducer,
    sections: sectionReducer,
    courses: courseReducer,
    users: userReducer
});

export default rootReducer;
