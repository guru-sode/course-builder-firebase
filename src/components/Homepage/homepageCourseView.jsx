import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
    introCard: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    }
});

class HomePageCourseView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid className={classes.introCard} item>
                    <Typography component="h2" variant="h2">
                        About
                    </Typography>
                    <Typography component="h6" variant="h6">
                    Course builder is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an extensive library of over 80,000 courses taught by expert instructors.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    console.log("data in state >> ", state);
    return {
        app: state.firebase.data ? state.firebase.data.app : ''
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


