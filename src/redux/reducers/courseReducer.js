import { CREATE_COURSE } from '../../constants/actionTypes';

const initState = {
    'courseId-1': {
        'title': 'javaScript',
        'description': 'this is basic course of javaScript',
        'cataagory': 'software',
        'section': [
            'section_id1',
            'section_id2',
            'section_id3'
        ],
    },
};

const courseReducer = (state = initState, action) => {
    switch (action.type) {
    case CREATE_COURSE:
        // console.log('in course Reducer >> ', action.payload);
        return state;
    default:
        return state;
    }
};

export default courseReducer;


