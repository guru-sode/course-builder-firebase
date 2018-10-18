import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { addVideoToStore } from '../redux/actions/sectionActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width:'100%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    button: {
        marginLeft: '45%',
        marginTop: '2%',
        backgroundColor: '#000a12',
        color: 'white',
        '&:hover': {
            backgroundColor: '#000a12'
        }
    },
    expandDiv:{
        width:'100%'
    }
});

class AddVideos extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const url = document.getElementById('url').value;
        const videoInfo = {
            name: title,
            description: description,
            url: url
        };
        if(title!==''&& description!==''&& url!=='')
            this.props.addVideoToStore(videoInfo);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('url').value = '';
    }

    componentWillUnmount() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const url = document.getElementById('url').value;
        const videoInfo = {
            name: title,
            description: description,
            url: url
        };
        if(title!==''&& description!==''&& url!=='')
            this.props.addVideoToStore(videoInfo);
    }

    render() {
        const { classes, section } = this.props;

        return (
            <div className={classes.container}>
                <form
                    className={classes.container}
                    id="titleForm"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="title"
                        label="Video title"
                        className={classes.textField}
                        type="title"
                        name="title"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="description"
                        multiline={true}
                        label="Video description"
                        className={classes.textField}
                        type="description"
                        name="description"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="url"
                        multiline={true}
                        label="Video URL"
                        className={classes.textField}
                        type="url"
                        name="url"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button onClick={this.handleAdd} variant="contained" className={classes.button} align="end">Add another video</Button>
                </form>
                {/* <Grid className={classes.videoCards} item> */}
                {section !== undefined ?
                    section.resourses.map((video, index) => {
                        if (index != 0) {
                            return (
                                <div className={classes.expandDiv}>
                                    <ExpansionPanel className={classes.expandDiv}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Video Title:{video.name}</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                <iframe width="600" height="100%" src={video.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                            );
                        }
                    }) :
                    <div>
                            No videos has been added so far
                    </div>}
                {/* </Grid> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(' in addVideo >> ', state.sections.current_section);
    const sid = state.sections.current_section;
    // const sections = state.firebase.data.app.sections;
    const sections = state.sections.sections;
    const section = sections ? sections[sid] : null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        section: section,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addVideoToStore: videoInfo => dispatch(addVideoToStore(videoInfo))
    };
};

/*  composing multiple connecter  */
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
    firebaseConnect([{
        path: '/app'
    }])
)(AddVideos);
