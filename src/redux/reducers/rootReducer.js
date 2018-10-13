import authReducer from './authReducer';
import sectionReducer from './sectionReducer';
import courseReducer from './courseReducer';
import { combineReducer } from 'redux';


const rootReducer = combineReducer({
    auth: authReducer,
    section: sectionReducer,
    course: courseReducer
});

export default rootReducer;
