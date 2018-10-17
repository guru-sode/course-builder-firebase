import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addSection, addSectionToStore } from '../redux/actions/sectionActions';
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
    button: {
        marginLeft: '45%'
    }
});

class SectionTitle extends Component {

    componentWillUnmount() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const section = {
            title,
            description
        };

        this.props.addSection(section);
        this.props.addSectionToStore(section);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSection: (section) => dispatch(addSection(section)),
        addSectionToStore: (section) => dispatch(addSectionToStore(section))
    };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SectionTitle)); 
