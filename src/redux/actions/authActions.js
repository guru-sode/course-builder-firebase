import {
    LOGIN_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT,
    SIGNOUT_FAIL
} from '../../constants/actionTypes';

export const signIn = (userInfo) => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then(() => {
            dispatch({ type: SIGNIN_SUCCESS, payload: getState().firebase.auth });
        }).catch((err) => {
            dispatch({ type: SIGNIN_ERROR, payload: LOGIN_FAIL });
        });
    };
};


export const signOut = () => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: SIGNOUT, payload: SIGNOUT_SUCCESS });
            }).catch((err) => {
                dispatch({ type: SIGNIN_ERROR, payload: SIGNOUT_FAIL });
            });
    };
};


