import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, CardContent, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { addVideoToStore } from '../redux/actions/sectionActions';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    container: {
        margin: '2em',
        width: '100%'
    },
    textField: {
        width: '55%'
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
    expandDiv: {
        width: '100%'
    },
    emptyGrid: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#000a12',
        color: 'white',
        "&:hover": {
            backgroundColor: "#000a12"
        },
        marginLeft: '0.25em',
        marginBottom: '1em'
      },
      buttonGroupDialog: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'start',
        margin: '0.3em 0.3em 0 0'
      },
      dialogBox: {
        padding: '0.25em',
        margin: 'auto',
        textAlign: 'center',
      },
      progress: {
        margin: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#000a12'
    },
    videos: {
        display: 'flex',
        flexDirection: 'column',
    },
    videoContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
});

class AddVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            description: '',
            url: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(e) {
        e.preventDefault();
        this.setState({ open: false });
        const videoInfo = {
            name: this.state.title,
            description: this.state.description,
            url: this.state.url
        };
        if (this.state.title !== '' && this.state.description !== '' && this.state.url !== '')
            this.props.addVideoToStore(videoInfo);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('url').value = '';
    }

    handleDialogOpen = () => {
        this.setState({ open: true });
    }

    handleDialogClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes, section } = this.props;
        console.log(this.state.title)
        return (
            <div className={classes.container}>
                <Dialog
                            className={classes.dialogBox}
                            open={this.state.open}
                            onClose={this.handleDialogClose}
                        >
                            <DialogTitle id="form-dialog-title" className={classes.titleAlign}>
                                Add videos
                            </DialogTitle>
                            <DialogContent>
                                <TextField
                                    id="title"
                                    label="Video title"
                                    className={classes.textField}
                                    type="title"
                                    name="title"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue="Video of array utilities"
                                    onChange={(e) => { this.setState({title: e.target.value}) }}
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
                                    defaultValue="Watch this video to understand array utilities"
                                    onChange={(e) => { this.setState({description: e.target.value}) }}
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
                                    defaultValue="https://www.youtube.com/watch?v=oigfaZ5ApsM"
                                    onChange={(e) => { this.setState({url: e.target.value}) }}
                                />
                                <Grid item className={classes.buttonGroupDialog}>
                                    <Button onClick={this.handleAdd} variant="contained" className={classes.buttons} align="end">Add</Button>
                                    <Button onClick={this.handleDialogClose} variant="contained" className={classes.buttons} align="end">Cancel</Button>
                                </Grid>
                            </DialogContent>
                        </Dialog>

                {section !== undefined ?
                    <Grid container>
                        <Grid className={classes.videos} container>
                        {section.resourses.length !== 1 ? 
                            <Button variant="fab" onClick={this.handleDialogOpen} mini className={classes.buttons} aria-label="Add">
                                <AddIcon />
                            </Button>: false}
                        <Grid container className={classes.videoContainer}>
                        {section.resourses.length !== 1 ?
                            section.resourses.map((video, index) => {
                                if(index !== 0) {
                                    return (
                                        <Grid item>
                                        <Card>
                                            <CardContent>
                                                <CardContent>
                                                    <Typography variant="h6">
                                                        {video.name}    
                                                    </Typography>
                                                    <Typography component="p">
                                                        {video.description}
                                                    </Typography>
                                                    <a href={video.url} target="_blank" style={{ textDecoration: 'none' }}>{video.url}</a>
                                                </CardContent>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    );
                                }
                            }) :
                            <Grid className={classes.emptyGrid} container>
                                <Grid item>
                                    <Typography variant="h6">No Videos</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="fab" onClick={this.handleDialogOpen} mini className={classes.buttons} aria-label="Add">
                                        <AddIcon />
                                    </Button>
                                </Grid>
                            </Grid>}
                            </Grid>
                        </Grid>
                    </Grid> :
                    <Grid className={classes.progressContainer} container><CircularProgress className={classes.progress} size={100} /> </Grid>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const sid = state.sections.current_section;
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
