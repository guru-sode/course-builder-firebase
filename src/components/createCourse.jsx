import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createCourse } from '../redux/actions/courseActions';
import { connect } from 'react-redux';
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
        marginLeft: '45%'
    }
});

class CreateCourse extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const add = {
            name: title,
            description: description
        };
        console.log(add);

    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
                <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    type="title"
                    name="title"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    type="description"
                    name="description"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" className={classes.button} onClick={this.handleSubmit}>
                    Submit
                </Button>
            </form>
        );
    }
}

CreateCourse.propTypes = {
    classes: PropTypes.object.isRequired,
};



const mapDispatchToProps = (dispatch) => {
    return {
        createCourse: (course) => dispatch(createCourse(course)),
    };
};
/*  composing multiple connecter  */
export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(CreateCourse);

// export default withStyles(styles)(CreateCourse);
