import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDlGBeYRyOxWbwIlVuAoo9HmI4tBNclDyU',
    authDomain: 'course-builder-1bdf1.firebaseapp.com',
    databaseURL: 'https://course-builder-1bdf1.firebaseio.com',
    projectId: 'course-builder-1bdf1',
    storageBucket: 'course-builder-1bdf1.appspot.com',
    messagingSenderId: '465887889403'
};
firebase.initializeApp(config);
export default firebase;