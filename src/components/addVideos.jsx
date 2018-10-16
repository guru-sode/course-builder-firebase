import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { addVideo } from '../redux/actions/sectionActions';


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

        // console.log(add);
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
        // this.props.ADD_SECTION(add);
        this.props.addVideo(videoInfo);
    }

    render() {
        const { classes } = this.props;

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
                <Grid item>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    console.log(' in addVideo >> ', state);
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        sections: state.firebase.data.app.sections ? state.firebase.data.app['sections'] : {}
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
