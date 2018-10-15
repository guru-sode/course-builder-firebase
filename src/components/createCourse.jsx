import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createCourse } from '../redux/actions/courseActions';
import { signIn, signOut } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';




const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    button: {
        marginLeft: '45%'
    }
});

class CreateCourse extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const add = {
            name: title,
            description: description
        };
        console.log(add);

    }

    render() {
        const course = {
            title: 'javaScript',
            description: 'basic of javaScript',
            'catagory': 'software',
            'section': [
                ''
            ]
        };
        // const userInfo = {
        //     email: 'kishan.reddy@gmail.com',
        //     password: '123456'
        // };
        const { classes, createCourse, signIn, signOut } = this.props;
        // signIn(userInfo);
        createCourse(course);
        // signOut();
        // console.log('in createc ourse >> ', this.props);

        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
                <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    type="title"
                    name="title"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" className={classes.button} onClick={this.handleSubmit}>
                    Submit
                </Button>
            </form>
        );
    }
}

CreateCourse.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    // console.log('in createCourse >>', state);
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        courses: state.firebase.data.app ? state.firebase.data.app['courses'] : state.courses,
        users: state.firebase.data.app ? state.firebase.data.app['users'] : state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCourse: (course) => dispatch(createCourse(course)),
        signIn: (userInfo) => dispatch(signIn(userInfo)),
        signOut: () => dispatch(signOut())
    };
};
/*  composing multiple connecter  */
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect([{
        path: '/app'
    }])
)(CreateCourse);

// export default withStyles(styles)(CreateCourse);
