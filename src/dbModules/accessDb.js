var fs = require('fs');

/* 
evey function of it will return promise 

*/

function getData(fileName, type) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(JSON.parse(data));
        });
    });
}

/* it will return object of users */

function getUser() {
    return getData('./data.json', 'utf8')
        .then((data) => {
            return data.users;
        }).catch((err) => {
            console.log(err)
        })
}

function getCourse() {
    return getData('./data.json', 'utf8')
        .then((data) => {
            return data.course;
        }).catch((err) => {
            console.log(err)
        })
}

function getSection() {
    return getData('./data.json', 'utf8')
        .then((data) => {
            return data.section;
        }).catch((err) => {
            console.log(err)
        })
}

function getSectionWith(sectionId) {
    return getData('./data.json', 'utf8')
        .then((data) => {
            console.log(data.section.section_id1);
        }).catch((err) => {
            console.log(err)
        })
}

function getCourseCatagory() {
    return getData('./data.json', 'utf8')
        .then((data) => {
            return data.course_catagory;
        }).catch((err) => {
            console.log(err)
        })
}


getSectionWith("section_id1").then((result) => { console.log(result) })
// getSection()
// getUser();
// getCourse();
// console.log(getUser())

module.exports = {
    getUser: getUser,
    getCourseCatagory: getCourseCatagory,
    getSectionWith: getSectionWith,
    getSection: getSection,
    getCourse: getCourse
};