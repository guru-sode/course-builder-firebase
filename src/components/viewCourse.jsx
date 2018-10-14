import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

const ViewCourse = (props) => {
    return ()
};

const mapStateToProps = state => {
    console.log("in viewCOurse >>", state);
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        courses: state.firebase.data.courses
    };
};

export default compose(
    connect(mapStateToProps, null),
    /* connecting firebase redux store */
    firebaseConnect([{
        path: '/app'
    }])
)(ViewCourse);