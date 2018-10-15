import { ADD_SECTION } from '../../constants/actionTypes';

export const addSection = (section) => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add section object with id to sections */
        const firbase = getFirebase();
        firbase.database().ref(`app/sections/${section.id}`).set(section)
            .then(() => {
                return dispatch({ type: ADD_SECTION, payload: section });
            }).catch((err) => {
                console.log(err);
            });
    };
};

