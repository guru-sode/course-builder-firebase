import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

class AddPlan extends Component {
    componentWillUnmount(){
        const description = document.getElementById('description').value;
        const add = {
            plan: description 
        };
        console.log(add);

    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm"noValidate autoComplete="off">
                <TextField
                    id="description"
                    multiline={true}
                    label="Plan of attack"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                />
            </form>
        );
    }
}


export default withStyles(styles)(AddPlan);