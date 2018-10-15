import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
// import { func } from 'prop-types';

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
        marginLeft:'45%'
    }
});

class SectionTitle extends Component {

    componentWillUnmount(){
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const add = {
            title,
            description 
        };
        this.props.ADD_SECTION(add);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm"noValidate autoComplete="off">
                <TextField
                    id="title"
                    label="Section title"
                    className={classes.textField}
                    type="title"
                    name="title"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="description"
                    label="Section description"
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
            name:'addTitle',
            section:add
        }}),
    };
};

export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SectionTitle)); 
