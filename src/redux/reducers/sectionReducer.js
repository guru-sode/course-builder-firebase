
import {
    ADD_SECTION, ADD_SECTION_ID,
    ADD_VIDEO,
    ADD_ADDITIONAL_RESOURSE, ADD_PLAN_OF_ATTACT
} from '../../constants/actionTypes';

const initialState = {
    current_section: '',
    section: {

    }
};

const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_SECTION_ID:
        console.log('in ADD_SECTION_ID >> ', action);
        return {
            ...state,
            current_section: action.payload
        };
    case ADD_SECTION:
        console.log('in add_secion >> ', action);
        return {
            ...state,
            section: action.payload
        };
    case ADD_VIDEO:
        console.log('in ADD_VIDEO >> ', action);
        return {
            ...state,
            section: {
                ...state.section,
                resourses: action.payload
            }
        };
    case ADD_ADDITIONAL_RESOURSE:
        console.log('in additional_resourses >> ', action);
        return {
            ...state,
            section: {
                ...state.section,
                additional_resourses: action.payload
            }
        };
    case ADD_PLAN_OF_ATTACT:
        console.log('in plan_of_attack >> ', action);
        return {
            ...state,
            section: {
                ...state.section,
                plan_of_attack: action.payload
            }
        };
    default:
        return state;

    }

};

export default sectionReducer;
