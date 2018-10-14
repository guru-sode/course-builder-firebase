import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT } from '../../constants/actionTypes';
const initState = {
    authError: null,
    userInfo: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
    case SIGNIN_ERROR:
        return {
            ...state,
            authError: action.payload
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
    default:
        return state;
    }

};

export default authReducer;