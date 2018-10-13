import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

class AddPlan extends Component {
    componentWillUnmount(){
        const description = document.getElementById('description').value;
        const add = {
            plan: description 
        };
        this.props.ADD_SECTION(add);
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


const mapStateToProps = state => {
    return {
        data: state.data,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        ADD_SECTION: (add) => dispatch({ type: 'ADD_SECTION', payload:{
            name:'addPlan',
            plan:add.plan,
        }}),
    };
};

export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AddPlan));