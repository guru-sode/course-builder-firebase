import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    withStyles, Grid, Typography, Paper, Card, CardContent, CardActions, CardMedia, Button,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import CourseSections from './courseSection';
import { ALL } from '../../constants/actionTypes';


const styles = theme => ({
    introCard: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
    },
    introCardInfo: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
        textAlign: 'center',
    },
    introItems: {
        maxWidth: 'none !important',
        flexBasis: '100% !important',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexBasis: '100%',
        marginTop: '2em',
        justifyContent: 'space-around !important',
    },
    cardMedia: {
        paddingTop: '20%', // 16:9
        height: 45,
        backgroundColor: '#000a12'
    },
    cardContent: {
        flexGrow: 1,
    },
    cardItem: {
        width: '350px'
    },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    progress: {
        margin: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#000a12'
    },
    heading: {
        fontSize: '1em'
    },
    navlink: {
        textDecoration: 'none',
        color: 'white',
    }
});

class HomePageCourseView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, app, selected_course_category } = this.props;
        let courses;
        let courseIds;
        let sections;
        let sectionIds;
        if (app !== undefined) {
            courses = Object.assign({}, app.courses);
            courseIds = Object.keys(courses);
            sections = Object.assign({}, app.sections);
            sectionIds = Object.keys(sections);
        }
        let courseString;
        return (
            <Grid container>
                {this.props.app === undefined ?
                    <Grid className={classes.progressContainer} container>
                        <CircularProgress className={classes.progress} size={100} />
                    </Grid> :
                    <div>
                        <Card className={classes.introCard}>
                            <Grid container>
                                <Grid className={classes.introItems} item md={6}>
                                    <div className={classes.introCardInfo}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            About Us
                                        </Typography>
                                        <Typography variant="h5" color="inherit" paragraph>
                                            Course builder is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an extensive library of over 80,000 courses taught by expert instructors.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                        <Grid container className={classes.card}>
                            {courses !== undefined ?
                                courseIds.map((course) => {
                                    if (courses[course].category === selected_course_category || selected_course_category === ALL) {
                                        return <Grid item>
                                            <Card className={classes.cardItem}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    title="Image title"
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {courses[course].title}
                                                    </Typography>
                                                    <Typography>
                                                        {courses[course].description}
                                                    </Typography>
                                                </CardContent>
                                                <CardContent>
                                                    <ExpansionPanel>
                                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                            <Typography component="h1" variant="h6" className={classes.heading}>Sections</Typography>
                                                        </ExpansionPanelSummary>
                                                        <CourseSections
                                                            sids={courses[course].section}
                                                            sections={sections}
                                                        />
                                                    </ExpansionPanel>
                                                </CardContent>
                                                <CardActions>
                                                    <NavLink className={classes.navlink} to="/login"
                                                    ><Button size="small" color="primary">
                                                            Enroll Now
                                                        </Button>
                                                    </NavLink>
                                                </CardActions>
                                            </Card>
                                        </Grid>;
                                    }
                                }) :
                                <div>Empty</div>
                            }
                        </Grid>
                    </div>
                };
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.firebase.data ? state.firebase.data.app : '',
        selected_course_category: state.courses.selected_course_category
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        null
    ),
    firebaseConnect([{
        path: '/app'
    }])
)(HomePageCourseView);


