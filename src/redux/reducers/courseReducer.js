import { CREATE_COURSE, SELECT_COURSE } from '../../constants/actionTypes';

const initialState = {
    current_course: null
};

function createCourse(state = initialState, action) {
    switch (action.type) {

    case CREATE_COURSE:
        // let newState = [...state];
        // newState.push(action.data);
        return state;

    case SELECT_COURSE:
        return {
            ...state,
            current_course: action.payload
        };
    default: return state;
    }
}

export default createCourse;