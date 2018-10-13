import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    button:{
        marginLeft:'45%',
        marginTop: '2%'
    }
});

class AddVideos extends Component {
    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
    }
    handleAdd(e){
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const url=document.getElementById('url').value;
        const add = {
            videoName: title,
            videoDescription: description,
            videoUrl:url
        };
        document.getElementById('title').value='';
        document.getElementById('description').value='';
        document.getElementById('url').value='';

        console.log(add);
        this.props.ADD_SECTION(title,description,url);

    }

    componentWillUnmount(){
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const url=document.getElementById('url').value;
        const add = {
            videoName: title,
            videoDescription: description,
            videoUrl:url
        };
        console.log(add);
        this.props.ADD_SECTION(title,description,url);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm"noValidate autoComplete="off">
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
                <Button variant="contained" className={classes.button} onClick={this.handleAdd}>
                Add another video
                </Button>
            </form>
        );
    }
}


const mapStateToProps = state => {
    return {
        data: state.data,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        ADD_SECTION: (title,description,url) => dispatch({ type: 'ADD_VIDEO', payload:{
            name:'addVideo',
            title:title,
            description:description,
            url:url
        }}),
    };
};

export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AddVideos));