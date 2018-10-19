import {
    CREATE_COURSE, ALL,
    SELECT_COURSE, SELECT_COURSE_CATEGROY
} from '../../constants/actionTypes';

const initialState = {
    current_course: '',
    selected_course_category: ALL
};

function createCourse(state = initialState, action) {
    switch (action.type) {

        case CREATE_COURSE:
            // let newState = [...state];
            // newState.push(action.data);
            return state;

        case SELECT_COURSE:
            // console.log(action.payload);
            return {
                ...state, current_course: action.payload
            };
        case SELECT_COURSE_CATEGROY:
            return {
                ...state,
                selected_course_category: action.payload
            }
        default: return state;
    }
}

export default createCourse;