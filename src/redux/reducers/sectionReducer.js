const initState = {
    'section_id1': {
        'title': 'javaScript syntax',
        'description': 'Introduction to javascript',
        'resourses': [
            {
                'name': 'java video',
                'description': 'you learn basic of java',
                'url': 'W6NZfCO5SIk'
            },
            {
                'name': 'java video',
                'description': 'you learn about function',
                'url': 'W6NZfCO5SIk'
            }
        ],
        'additional_resourses': [
            {
                'description': 'sqLite tutorial',
                'url': 'http://www.sqlitetutorial.net/'
            },
            {
                'description': 'restfull api design practices',
                'url': 'https: //blog.philipphauer.de/restful-api-design-best-practices/'
            }
        ],
        'plan_of_attack': [
            'First we go through javaScript syntax',
            'we practice javaScript function',
            'Arrow function',
            'High order function',
            'Object oriented javaScript'
        ]
    }
};

const sectionReducer = (state = initState, action) => {
    return state;
};

export default sectionReducer;