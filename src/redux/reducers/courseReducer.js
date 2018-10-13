import { CREATE_COURSE } from '../constants/actionTypes';

const initialState = {
    title: '',
    category: '',
    description: '',
    section:[]
};

function createCourse(state = initialState, action) {
    switch(action.type) {

    case CREATE_COURSE:
        return action.data;
    
    
    default: return state;
    }
}

export default createCourse;