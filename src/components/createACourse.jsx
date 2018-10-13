import React, { Component } from 'react';
import { withStyles, Grid, Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, List, Drawer } from '@material-ui/core';
import { createCourse } from '../redux/actions/createACourse';
import { connect } from 'react-redux';

const styles = theme => ({
    main: {
        display: 'flex',
    },
    selectDropdown: {
        textDecoration: "none",
        padding: "0.50em",
        backgroundColor: "white",
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
            courseTitle: this.state.courseTitle,
            category: this.state.category,
            courseDescription: this.state.courseDescription
        }
        this.props.sendCourseDetails(courseDetails);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.main} container>
                <Grid item md={6}>
                    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
                        <Divider />
                        <Button onClick={this.viewMyCourses}>View My Courses</Button>
                        <Divider />
                        <Button onClick={this.viewAllCourses}>View All Courses</Button>
                        <Divider />
                        <Button onClick={this.handleClickOpen}>Create a Course</Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Enter Course Details</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Enter Course Title</DialogContentText>
                                <TextField autoFocus margin="dense" id="course-name" fullWidth onChange={this.handleTitleChange} />
                                <DialogContentText>Select Category</DialogContentText>
                                <select onClick={this.handleDropdownChange} className={classes.selectDropdown}>
                                    <option value="Software">Software Development</option>
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

                <Grid item md={6}>
                    hello
                </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sendCourseDetails: (details) => {
        dispatch(createCourse(details));
    }
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateCourse));