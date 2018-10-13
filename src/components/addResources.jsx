import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class AddResources extends Component {
    handleAdd(e){
        e.preventDefault();
        const url = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const add = {
            url: url,
            description: description 
        };
        console.log(add);

    }
    
    componentWillUnmount(){
        const url = document.getElementById('url').value;
        const description = document.getElementById('description').value;
        const add = {
            resourceUrl: url,
            resourceDescription: description 
        };
        console.log(add);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm"noValidate autoComplete="off">
                <TextField
                    id="url"
                    label="Resource URL"
                    className={classes.textField}
                    type="url"
                    name="url"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="description"
                    multiline={true}
                    label="Description"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" className={classes.button} onClick={this.handleAdd}>
                Add another URL
                </Button>
            </form>
        );
    }
}


export default withStyles(styles)(AddResources);