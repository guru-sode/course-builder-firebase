import {
    ADD_SECTION, ADD_SECTION_ID,
    ADD_VIDEO,
    ADD_ADDITIONAL_RESOURSE, ADD_PLAN_OF_ATTACT
} from '../../constants/actionTypes';

export const addSection = (section) => {

    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add section object with id to sections */
        const store = getState();
        const app = store.firebase.data.app;
        const cid = store.courses.current_course;
        const currentCourse = app.courses[cid];
        const sid = `${cid}_${section.title}`;
        section = {
            ...section,
            cid,
            sid,
            resourses: [''],
            additional_resourses: [''],
            plan_of_attack: ''
        };
        const firebase = getFirebase();
        firebase.database().ref(`app/sections/${section.sid}`).set(section)
            .then(() => {
                firebase.database().ref(`app/courses/${cid}`).update({
                    section: [...currentCourse.section, sid]
                }).then(() => {
                    return dispatch({ type: ADD_SECTION_ID, payload: section.sid });
                });

            }).catch((err) => {
                return err;
            });
    };
};

export const addVideo = (videoInfo) => {
    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const store = getState();
        const app = store.firebase.data.app;
        const sid = store.sections.current_section;
        const currentSection = app.sections[sid];
        const firebase = getFirebase();
        firebase.database().ref(`app/sections/${currentSection.sid}`).update({
            resourses: [...currentSection.resourses, videoInfo]
        }).then(() => {
            return dispatch({ type: ADD_VIDEO, payload: videoInfo });
        }).catch((err) => {
            return err;
        });
    };
};



export const addAdditionalResourse = (resoursesInfo) => {
    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const store = getState();
        const app = store.firebase.data.app;
        const sid = store.sections.current_section;
        const currentSection = app.sections[sid];
        const firebase = getFirebase();
        firebase.database().ref(`app/sections/${currentSection.sid}`).update({
            additional_resourses: [...currentSection.additional_resourses, resoursesInfo]
        }).then(() => {
            return dispatch({ type: ADD_ADDITIONAL_RESOURSE, payload: resoursesInfo });
        }).catch((err) => {
            return err;
        });
    };
};

export const addPlanOfAttack = (plan_of_attack) => {
    /*   return function to redux-thunk */
    return (dispatch, getState, { getFirebase }) => {
        /* asyn call to firbase  to add course object with id to courses */
        const store = getState();
        const app = store.firebase.data.app;
        const sid = store.sections.current_section;
        const currentSection = app.sections[sid];
        const firebase = getFirebase();
        firebase.database().ref(`app/sections/${currentSection.sid}`).update({
            ...currentSection, plan_of_attack
        }).then(() => {
            return dispatch({ type: ADD_PLAN_OF_ATTACT, payload: plan_of_attack });
        }).catch((err) => {
            return err;
        });
    };
};

export const addSectionToStore = (section) => {
    return (dispatch, getState, { getFirebase }) => {
        const store = getState();
        const app = store.firebase.data.app;
        const cid = store.courses.current_course;
        const currentCourse = app.courses[cid];
        const sid = `${cid}_${section.title}`;
        section = {
            ...section,
            cid,
            sid,
            resourses: [''],
            additional_resourses: [''],
            plan_of_attack: ''
        };
        const firebase = getFirebase();
        firebase.database().ref(`app/courses/${cid}`).update({
            section: [...currentCourse.section, sid]
        }).then(() => {
            dispatch({ type: ADD_SECTION_ID, payload: section.sid });
            dispatch({ type: ADD_SECTION, payload: section });
        }).catch((err) => {
            return err;
        });

    };
};

export const selectSection = (section_id) => {
    return ({ type: ADD_SECTION_ID, payload: section_id });
};
export const addVideoToStore = (videoInfo) => {
    return ({ type: ADD_VIDEO, payload: videoInfo });
};

export const addAdditionalResourseToStore = (resoursesInfo) => {
    return ({ type: ADD_ADDITIONAL_RESOURSE, payload: resoursesInfo });
};

export const addPlanOfAttackToStore = (plan_of_attack) => {
    return ({ type: ADD_PLAN_OF_ATTACT, payload: plan_of_attack });
};
