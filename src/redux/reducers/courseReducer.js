import { CREATE_COURSE } from '../constants/actionTypes';

const initialState = [];

function createCourse(state = initialState, action) {
    switch(action.type) {

    case CREATE_COURSE: {
        let newState = [...state];
        newState.push(action.data);
        return newState;
    }
    default: return state;
    }
}

export default createCourse;