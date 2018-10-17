import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addPlanOfAttackToStore,submitSection } from '../redux/actions/sectionActions';
import { compose } from 'redux';
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
    button: {
        marginLeft: '45%',
        marginTop: '2%'
    }
});

class AddPlan extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        const description = document.getElementById('description').value;
        const planInfo = description;
        if(description!=='')
            this.props.addPlanOfAttackToStore(planInfo);

    }

    handleSubmit(){
        this.props.submitSection();
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
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={this.handleSubmit}
                    className={classes.button}
                >
                  Submit
                </Button>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addPlanOfAttackToStore: (planInfo) => dispatch(addPlanOfAttackToStore(planInfo)),
        submitSection:()=> dispatch(submitSection())
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(AddPlan);

