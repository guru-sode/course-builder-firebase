import {
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNUP_ERROR,
    SIGNOUT, SIGNUP_SUCCESS
} from '../../constants/actionTypes';


const initState = {
    authError: null,
    userInfo: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {

    case SIGNIN_ERROR:
        console.log(action.payload);
        return {
            ...state,
            authError: action.payload
        };

    case SIGNIN_SUCCESS:
        console.log('Sign successfull');
        return {
            ...state,
            authError: null,
            userInfo: action.payload
        };

    case SIGNOUT:
        return {
            ...state,
            userInfo: null
        };

    case SIGNUP_SUCCESS:
        console.log('in auth action signup >> ', action);
        return state;

    case SIGNUP_ERROR:
        return {
            ...state,
            authError: action.payload.err
        };

    default:
        return state;
    }

};

export default authReducer;