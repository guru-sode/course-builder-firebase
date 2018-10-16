gitimport {
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
            const { auth } = getState().firebase;
            const { uid } = auth;
            userInfo['uid'] = uid;
            userInfo['course'] = ['courseId-1', 'courseId-2'];
            firebase.database().ref(`app/users/${uid}`).set(userInfo);
            return dispatch({ type: SIGNIN_SUCCESS, payload: auth });
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



import { SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_FAIL, } from '../../constants/actionTypes';

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
                uid: response.user.uid,
                firstName: newUserInfo.firstName,
                lastName: newUserInfo.lastName,
                email: newUserInfo.email,
                course: ['']
            });
        }).then(() => {
            return dispatch({ type: SIGNUP_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNUP_ERROR, payload: err });
        });
    };
};
