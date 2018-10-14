let data={
    'users': {
        'kishan': {
            'user_id': 'kishan',
            'user_name': 'kishan',
            'email': 'kishan.reddy.mountblue.io',
            'course': [
                'courseId-1',
                'courseId-2'
            ]
        }
    },
    'course': {
        'courseId-1': {
            'title': 'javaScript',
            'description': 'this is basic course of javaScript',
            'section': [
                'section_id1',
                'section_id2',
                'section_id3'
            ],
            'plan_of_attack': [
                'First we go through javaScript syntax',
                'we practice javaScript function',
                'Arrow function',
                'High order function',
                'Object oriented javaScript'
            ],
            'resourses': [
                'http://www.sqlitetutorial.net/',
                'https: //blog.philipphauer.de/restful-api-design-best-practices/',
                'https: //www.npmjs.com/package/sqlite',
                'https: //expressjs.com/',
                'https: //pastebin.com/bztrjjnV . - Project details API endpoints / minimal table structure'
            ]
        },
        'courseId-2': {
            'title': 'IPL DATA SET VISUALIZATION',
            'description': 'You will learn data manipulate',
            'section': [],
            'plan_of_attack': [
                'Familiarize yourself with JavaScript syntax',
                'Use csvtojson library to read and convert csv to json',
                'Use a charting library such as HighCharts',
                'Build the JSON required for the High Charts for the given problem statements',
                'Write unit tests using mocha and chai'
            ],
            'resourses': [
                'https://github.com/Keyang/node-csvtojson',
                'https://lodash.com/',
                'https://mochajs.org/',
                'http://www.chaijs.com/',
                'https://www.npmjs.com/package/serve'
            ]
        }
    },
    'section': {
        'section_id1': {
            'title': 'javaScript syntax',
            'description': 'Introduction to javascript',
            'resourses': [
                'W6NZfCO5SIk',
                'PwsigsH4oXw',
                'fju9ii8YsGs',
                'GuahuUTSUKI',
                'Ukg_U3CnJWI'
            ],
            'additional_resourses': [
                ''
            ]
        }
    },
    'course_catagory': [
        'JavaScrip',
        'IPL DATA SET VISUALIZATION',
        'React',
        'Redux',
        'React-native'
    ]
};

const initialState={
    data:data,
};

const sectionReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'ADD_SECTION':
        if(action.payload.name==='addTitle'){
            console.log(action.payload.section);
        }
        if(action.payload.name==='addVideo'){
            console.log(action.payload.video);
        }
        if(action.payload.name==='addResource'){
            console.log(action.payload.resource);
        }
        if(action.payload.name==='addPlan'){
            console.log(action.payload.plan);
        }
        break;
    default:
        return state;

    }

};

export default sectionReducer;