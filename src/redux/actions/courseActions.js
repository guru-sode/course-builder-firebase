import { CREATE_COURSE } from '../../constants/actionTypes';

export const createCourse = (course) => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */

        // console.log('in createCourse >> ', getState());
        // const { userInfo } = getState().auth;
        // const app = getState().firebase.data.app;

        // const uid = userInfo ? userInfo['uid'] : null;
        const uid = 'gZOTI0SWDkZAtYziC0yiKrWuXGK2';
        // const user = app.users ? app.users[uid] : null;
        // const userCourse= user.course;
        const userCourse = [];
        const cid = `${uid}_${course.title}`;
        // console.log('in createCourse >> ', getState().firbase.data);
        course = {
            ...course, uid, cid
        };
        const firbase = getFirebase();
        firbase.database().ref(`app/courses/${course.cid}`).set(course)
            .then(() => {
                firbase.database().ref(`app/users/${uid}`).update({ course: [...userCourse, cid] })
                    .then(() => {
                        return dispatch({ type: CREATE_COURSE, payload: course });
                    });

            }).catch((err) => {
                console.log(err);
            });
    };
};