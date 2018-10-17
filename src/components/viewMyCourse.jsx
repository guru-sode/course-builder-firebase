import React, { Component } from 'react';
import { Typography, Card, CardContent, CardActions, CardMedia, withStyles, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import DrawerSection from './drawerSection';
import { selectCourse } from '../redux/actions/courseActions';


const styles = theme => ({
    myCourseContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        flexWrap: 'wrap'
    },
    card: {
        margin: '1em',
        width: 300,
        height: 300,
        wordWrap: 'break-word',
    },
    media: {
        height: 140,
        backgroundColor: '#000a12',
    },
    button:{
        backgroundColor: '#000a12',
        color: 'white',
        "&:hover": {
            backgroundColor: "#000a12"
        },
        textDecoration:'none',
    }
});

class ViewMyCourse extends Component {
    constructor() {
        super();
        this.addSection = this.addSection.bind(this);
    }

    addSection(key) {
        this.props.selectCourse(key);
    }
    render() {
        const { classes, courses, user } = this.props;
        const { course } = user;
        return (
            <Grid className={classes.myCourseContainer} container>
                {course !== undefined && courses !== undefined ?
                    course.map((key, index) => {
                        if (index !== 0) {
                            return (<Grid item md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.media} />
                                    <CardContent>
                                        <Typography component="h2">
                                            {courses[key].title}
                                        </Typography>
                                        <Typography component="h4">
                                            {courses[key].category}
                                        </Typography>
                                        <Typography component="p">
                                            {courses[key].description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <NavLink to='/sectionTitle' style={{ textDecoration: 'none' }}><Button id={key} onClick={this.addSection.bind(this, key)} variant="contained" className={classes.button} align="end">Add Sections</Button></NavLink>
                                    </CardActions>
                                </Card>
                            </Grid>);
                        }
                    }) :
                    <Typography component="h1">No Courses Created</Typography>}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    // console.log(' in addVideo >> ', state.sections.current_section);
    const { uid } = state.auth.userInfo;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        courses: state.firebase.data.app ? state.firebase.data.app['courses'] : state.courses,
        user: state.firebase.data.app ? state.firebase.data.app.users[uid] : ''
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectCourse: id => dispatch(selectCourse(id)),
    };
};

/*  composing multiple connecter  */
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect([{
        path: '/app'
    }])
)(ViewMyCourse);