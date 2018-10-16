const initialState = {
    current_section: ''
};

const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_SECTION':
        return {
            ...state,
            current_section: action.payload
        };
    default:
        return state;

    }

};

export default sectionReducer;
