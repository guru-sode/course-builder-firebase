import React, { Component } from 'react';
import { withStyles, Grid, Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, List, Drawer } from '@material-ui/core';
import ViewMyCourse from './viewMyCourse';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { createCourse } from '../redux/actions/courseActions';

const styles = theme => ({
    main: {
        display: 'flex',
        padding: '1em'
    },
    selectDropdown: {
        textDecoration: 'none',
        padding: '0.50em',
        backgroundColor: 'white',
    },
    dialogBox: {
        padding: '0.5em',
        margin: '1em',
    }
});

class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            courseTitle: '',
            category: '',
            courseDescription: '',
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleTitleChange = (e) => {
        this.setState({ courseTitle: e.target.value })
    }

    handleDropdownChange = (e) => {
        this.setState({ category: e.target.value })
    }

    handleDescriptionChange = (e) => {
        this.setState({ courseDescription: e.target.value });
    }

    handleSubmit = () => {
        this.setState({ open: false });
        const courseDetails = {
            title: this.state.courseTitle,
            description: this.state.courseDescription,
            category: this.state.category,
            section: ['']
        };
        // this.props.sendCourseDetails(courseDetails);
        this.props.createCourse(courseDetails);
    }

    render() {
        const { classes } = this.props;
        // console.log(this.props.courses);
        return (
            <Grid className={classes.main} container>
                <Grid item md={2}>
                    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
                        <Divider />
                        <Button onClick={this.viewMyCourses}>View My Courses</Button>
                        <Divider />
                        <Button onClick={this.viewAllCourses}>View All Courses</Button>
                        <Divider />
                        <Button onClick={this.handleClickOpen}>Create a Course</Button>
                        <Dialog className={classes.dialogBox} open={this.state.open} onClose={this.handleClose}>
                            <DialogTitle id="form-dialog-title">Enter Course Details</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Enter Course Title</DialogContentText>
                                <TextField autoFocus margin="dense" id="course-name" fullWidth onChange={this.handleTitleChange} />
                                <DialogContentText>Select Category</DialogContentText>
                                <select onClick={this.handleDropdownChange} className={classes.selectDropdown} required>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Science">Science</option>
                                    <option value="Art">Art</option>
                                </select>
                                <DialogContentText>Enter Course Description</DialogContentText>
                                <TextField margin="dense" id="course-description" fullWidth onChange={this.handleDescriptionChange} />
                                <Button onClick={this.handleSubmit} color="primary">Create</Button>
                            </DialogContent>
                        </Dialog>
                    </Drawer>
                </Grid>

                <Grid item md={10}>
                    <ViewMyCourse />
                </Grid>
            </Grid>
        );
    }
}



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

