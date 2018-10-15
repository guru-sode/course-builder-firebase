import { CREATE_COURSE }  from '../constants/actionTypes';

export const createCourse = data => ({
    type: CREATE_COURSE,
    data: {
        title: data.courseTitle,
        category: data.category,
        description: data.courseDescription,
        sections: [''],
    }
});