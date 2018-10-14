import { CREATE_COURSE } from '../../constants/actionTypes';

export const createCourse = (course) => {

    /*   return function to redux-thunk */
    return (dispatch, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const firbase = getFirebase();
        firbase.database().ref(`app/courses/${course.id}`).set(course)
            .then(() => {
                return dispatch({ type: CREATE_COURSE, payload: course });
            }).catch((err) => {
                console.log(err);
            });
    };
};

