import React, { Component } from 'react';
import { withStyles, Grid, Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

const styles = theme => ({
    overview: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5em',
    },
});

class ViewSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { course, store_sections, sid, cid, sections, classes } = this.props;
        const sids = course.section;
        // console.log(course);
        let section;
        if (sections !== undefined) {
            section = sections[this.props.match.params.sid];
        }
        console.log(section);
        // console.log(sections);
        // console.log(this.props.match.params.sid);
        return (
            <Grid className={classes.overview} container spacing={24}>
                <Grid item><Typography style={{ textAlign: 'center' }} variant="h1">{section.title}</Typography></Grid>
                <Grid item><Typography variant="h4">Overview</Typography></Grid>
                <Grid item><Typography variant="p">{section.description}</Typography></Grid>
                <Grid item><Typography variant="h4">Videos</Typography></Grid>
                <Grid item>
                    {section.resourses.map((video, index) => {
                        if (index !== 0) {
                            return (
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h6">{video.name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography variant="p">{video.description}</Typography>
                                    </ExpansionPanelDetails>
                                    <ExpansionPanelDetails>
                                        <a href={video.url} target="_blank"><Typography variant="p">{video.url}</Typography></a>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>);
                        }
                    })}
                </Grid>
                <Grid item><Typography variant="h4">Resources</Typography></Grid>
                <Grid item>
                    {section.additional_resourses.map((resource, index) => {
                        if (index !== 0) {
                            return (
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h6">{resource.name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography variant="p">{resource.description}</Typography>
                                    </ExpansionPanelDetails>
                                    <ExpansionPanelDetails>
                                        <a href={resource.url} target="_blank"><Typography variant="p">{resource.url}</Typography></a>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>);
                        }
                    })}
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    const sid = state.sections.current_section;
    const sections = state.firebase.data.app.sections;
    const local_sections = state.sections.sections;
    const cid = state.courses.current_course;
    const app = state.firebase.data ? state.firebase.data.app : null;
    const current_course = app ? app.courses[cid] : null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        course: current_course ? current_course : '',
        sections: state.firebase.data.app
            ? state.firebase.data.app['sections']
            : state.courses,
        store_sections: sections ? sections : '',
        sid: sid ? sid : '',
        cid: cid ? cid : ''
    };
};

/*  composing multiple connecter  */
export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        null
    ),
    firebaseConnect([
        {
            path: '/app'
        }
    ])
)(ViewSection);