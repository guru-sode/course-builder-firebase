import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addPlanOfAttackToStore, submitSection } from '../redux/actions/sectionActions';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '50%',
    },
    button: {
        marginTop: '2%',
        backgroundColor: '#000a12',
        color: 'white',
        '&:hover': {
            backgroundColor: '#000a12'
        },
        textAlign: 'end',
    },
});

class AddPlan extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const description = document.getElementById('description').value;
        const planInfo = description;
        if (description !== '')
            this.props.addPlanOfAttackToStore(planInfo);
        document.getElementById('description').value='';   
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
                <TextField
                    id="description"
                    multiline={true}
                    label="Plan of attack"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                    multiline="true"
                    rows={4}
                    rowsMax={4}
                />
                <Button onClick={()=>this.handleSubmit()} variant="contained" className={classes.button} align="end">SUBMIT</Button>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addPlanOfAttackToStore: (planInfo) => dispatch(addPlanOfAttackToStore(planInfo)),
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(AddPlan);

