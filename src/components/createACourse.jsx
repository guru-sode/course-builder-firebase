import React, { Component } from 'react';
import {
  withStyles,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Avatar
} from '@material-ui/core';
import ViewMyCourse from './viewMyCourse';
import ViewAllCourses from './viewAllCourse'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { createCourse } from '../redux/actions/courseActions';
import { NavLink } from 'react-router-dom';

const drawerWidth = 200;

const styles = theme => ({
  main: {
    display: 'flex',
    padding: '0 1em 1em 0',
  },
  selectDropdown: {
    textDecoration: 'none',
    padding: '0.50em',
    backgroundColor: 'white',
    display: 'block'
  },
  dialogBox: {
    padding: '0.5em',
    margin: 'auto',
  },
  input: {
    width: '100%'
  },
  drawer: {
    position: 'relative',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '925px'
  },
  appBar: {
    backgroundColor: '#000a12',
  },
  button: {
    backgroundColor: '#000a12',
    color: 'white',
    "&:hover": {
      backgroundColor: "#000a12"
    },
    marginLeft: '0.25em'
  },
  titleAlign: {
    textAlign: 'center !important',
    paddingBottom: 0
  }
});

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourseFlag: false,
      open: false,
      courseTitle: '',
      category: '',
      courseDescription: ''
    };
  }


  viewMyCourses = () => {
    this.setState({ allCourseFlag: false });
  };
  viewAllCourses = () => {
    this.setState({ allCourseFlag: true });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTitleChange = e => {
    this.setState({ courseTitle: e.target.value });
  };

  handleDropdownChange = e => {
    this.setState({ category: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ courseDescription: e.target.value });
  };

  handleSubmit = () => {
    this.setState({ open: false });
    const courseDetails = {
      title: this.state.courseTitle,
      description: this.state.courseDescription,
      category: this.state.category,
      section: ['']
    };
    this.props.createCourse(courseDetails);
  };

  render() {
    const { classes, course_category, user } = this.props;
    const { allCourseFlag } = this.state
    const courseList = allCourseFlag ? <ViewAllCourses /> : <ViewMyCourse />
    const category = course_category.map((course) => {
      return (<option value={course}>{course}</option>)
    })
    return (
      <div>
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Courses
          </Typography>

            <NavLink to="/" style={{ textDecoration: 'none', marginLeft: '80%' }}>
              <Button variant="contained" className={classes.logOutbutton} align="end">Signout</Button>
            </NavLink>

            <Avatar className={classes.purpleAvatar}>{user.username ? user.username[0].toUpperCase() : null}</Avatar>

          </Toolbar>
        </AppBar>
        <Grid className={classes.main} container>
          <Grid item md={2}>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
              anchor="left"
            >
              <Divider />
              <Button onClick={this.viewMyCourses}>My Courses</Button>
              <Divider />
              <Button onClick={this.viewAllCourses}>All Courses</Button>
              <Divider />
              <Button onClick={this.handleClickOpen}>Create Course</Button>
              <Dialog
                className={classes.dialogBox}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle id="form-dialog-title" className={classes.titleAlign}>
                  Enter Course Details
              </DialogTitle>
                <DialogContent>
                  <TextField
                    onChange={this.handleTitleChange}
                    className={classes.input}
                    id="course-name"
                    label="Course Title"
                    type="name"
                    name="course-name"
                    margin="normal"
                    variant="outlined"
                  />
                  <DialogContentText>Select Category</DialogContentText>
                  <select
                    onClick={this.handleDropdownChange}
                    onOpen={this.handleDropdownChange}
                    className={classes.selectDropdown}
                    required
                  >
                    {category}
                  </select>
                  <TextField
                    onChange={this.handleDescriptionChange}
                    className={classes.input}
                    id="course-description"
                    label="Course Description"
                    type="name"
                    name="course-description"
                    margin="normal"
                    variant="outlined"
                    multiline="true"
                  />
                  <Grid item className={classes.buttons}></Grid>
                  <Button onClick={this.handleSubmit} variant="contained" className={classes.button} align="end">CREATE</Button>
                  <Button onClick={this.handleClose} variant="contained" className={classes.button} align="end">CANCEL</Button>
                </DialogContent>
              </Dialog>
            </Drawer>
          </Grid>
          <Grid item md={10}>
            {courseList}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const uid = state.firebase.auth ? state.firebase.auth.uid : '';
  const users = state.firebase.data.app ? state.firebase.data.app['users'] : {}

  return {
    /* getting data from firebase redux store { firebaseReducer as firebase } */
    courses: state.firebase.data.app
      ? state.firebase.data.app['courses']
      : state.courses,
    user: users[uid] ? users[uid] : {},
    course_category: state.firebase.data.app['course_category'],


  };
};
const mapDispatchToProps = dispatch => {
  return {
    createCourse: course => dispatch(createCourse(course)),
  };
};

/*  composing multiple connecter  */
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firebaseConnect([
    {
      path: '/app'
    }
  ])
)(CreateCourse);
