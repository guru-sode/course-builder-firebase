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
        return {
            ...state,
            authError: action.payload.err.message
        };

    case SIGNIN_SUCCESS:
        return {
            ...state,
            userInfo: action.payload
        };

    case SIGNOUT:
        return {
            ...state,
            userInfo: null
        };

    case SIGNUP_SUCCESS:
        return state;

    case SIGNUP_ERROR:
        return {
            ...state,
            authError: action.payload.err.message
        };

    default:
        return state;
    }

};

export default authReducer;