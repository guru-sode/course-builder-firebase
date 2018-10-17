import {
    LOGIN_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT,
    SIGNOUT_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR

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
            const { auth } = getState().firebase;
            return dispatch({ type: SIGNIN_SUCCESS, payload: auth });
        }).catch((err) => {
            return dispatch({ type: SIGNIN_ERROR, payload: LOGIN_FAIL });
        });
    };
};


export const signOut = () => {
    console.log('sign out successfull');
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


export const signUp = (newUserInfo) => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            newUserInfo.email,
            newUserInfo.password
        ).then((response) => {
            return firebase.database().ref(`app/users/${response.user.uid}`).set({
                ...newUserInfo,
                uid: response.user.uid,
                course: ['']
            });
        }).then(() => {
            const { auth } = getState().firebase;
            return dispatch({ type: SIGNUP_SUCCESS, payload: auth });
        }).catch((err) => {
            dispatch({ type: SIGNUP_ERROR, payload: err });
        });
    };
};


