import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { addVideo } from '../redux/actions/sectionActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Image';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    button: {
        marginLeft: '45%',
        marginTop: '2%'
    },
    videoCards: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    card: {
        margin: '1em',
        width: 200,
        height: 200,
        wordWrap: 'break-word',
    },
    expand:{
        width:'100%',
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
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('url').value = '';
        this.props.addVideo(videoInfo);
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
        this.props.addVideo(videoInfo);
    }

    render() {
        const { classes, section } = this.props;
        if(section!==undefined)
            console.log('section >> ', section);

        return (
            <Grid container>
                <Grid item>
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
                            label="Video URL"
                            className={classes.textField}
                            type="url"
                            name="url"
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={this.handleAdd}
                        >
                            Add another video
                        </Button>
                    </form>
                </Grid>
                <Grid className={classes.videoCards} item>
                    {section !== undefined ?
                        section.resourses.map((video, index) => {
                            if(index != 0) {
                                return(
                                    <List>
                                        <ListItem>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                            <ListItemText primary={video.name} secondary={video.description} />
                                        </ListItem>
                                    </List>
                                );
                            }
                        }) :
                        <Avatar>
                            <FolderIcon />
                        </Avatar>}
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    // console.log(' in addVideo >> ', state.sections.current_section);
    const sid = state.sections.current_section;
    const sections = state.firebase.data.app.sections;
    const section = sections ? sections[sid] : null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        section: section,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addVideo: videoInfo => dispatch(addVideo(videoInfo))
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
