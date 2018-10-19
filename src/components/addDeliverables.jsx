import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addDeliverableToStore,submitSection } from '../redux/actions/sectionActions';
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
    buttonDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
});

class AddDeliverables extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const description = document.getElementById('description').value;
        const planInfo = description;
        if(description!=='')
            this.props.addDeliverableToStore(planInfo);
        this.props.submitSection();
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
                <TextField
                    id="description"
                    multiline={true}
                    label="Deliverables"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                    multiline="true"
                    defaultValue="- Get an overview of the Responsive News website and what it looks like.
                     - Understand and dive deep into HTML / CSS
                      - Incrementally build changes to the responsive website in different git branches"
                    rows={4}
                    rowsMax={4}
                />
                <div className={classes.buttonDiv}>
                    <NavLink to="/createCourse" style={{ textDecoration: 'none' }}><Button onClick={()=>this.handleSubmit()} variant="contained" className={classes.button} align="end">FINISH</Button></NavLink>
                </div>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addDeliverableToStore: (deliverable) => dispatch(addDeliverableToStore(deliverable)),
        submitSection:()=> dispatch(submitSection())
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(AddDeliverables);

