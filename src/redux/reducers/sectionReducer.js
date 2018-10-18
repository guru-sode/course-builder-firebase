
import {
    ADD_SECTION, ADD_SECTION_ID,
    ADD_VIDEO,
    ADD_ADDITIONAL_RESOURSE, ADD_PLAN_OF_ATTACT
} from '../../constants/actionTypes';

const initialState = {
    current_section: '',
    sections: {

    }
};

const sectionReducer = (state = initialState, action) => {
    const { sections, current_section } = state;
    // const { sid } = current_section;
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
            sections: {
                ...sections,
                [current_section]: action.payload
            }
        };
    case ADD_VIDEO:
        console.log('in ADD_VIDEO >> ', action);
        return {
            ...state,
            sections: {
                ...sections,
                [current_section]: {
                    ...sections[current_section],
                    resourses: [...sections[current_section].resourses, action.payload]
                },

            }
        };
    case ADD_ADDITIONAL_RESOURSE:
        console.log('in additional_resourses >> ', action);
        return {
            ...state,
            sections: {
                ...sections,
                [current_section]: {
                    ...sections[current_section],
                    additional_resourses: [...sections[current_section].additional_resourses, action.payload]
                },

            }
        };
    case ADD_PLAN_OF_ATTACT:
        console.log('in plan_of_attack >> ', action);
        return {
            ...state,
            sections: {
                ...sections,
                [current_section]: {
                    ...sections[current_section],
                    plan_of_attack: action.payload
                },
            }
        };
    default:
        return state;

    }

};

export default sectionReducer;
