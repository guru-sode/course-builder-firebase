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
    return state;
};

export default courseReducer;