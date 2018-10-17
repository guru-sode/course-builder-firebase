import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addPlanOfAttack } from '../redux/actions/sectionActions';
import { compose } from 'redux';

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
    button: {
        marginLeft: '45%',
        marginTop: '2%'
    }
});

class AddPlan extends Component {
    componentWillUnmount() {
        const description = document.getElementById('description').value;
        const planInfo = description;
        if(description!=='')
            this.props.addPlanOfAttack(planInfo);

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
                />
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addPlanOfAttack: (planInfo) => dispatch(addPlanOfAttack(planInfo))
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(AddPlan);

