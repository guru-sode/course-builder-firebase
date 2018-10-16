import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addAdditionalResourse } from '../redux/actions/sectionActions';

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

class AddResources extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const url = document.getElementById('description').value;
        const description = document.getElementById('url').value;
        const resoursesInfo = {
            name,
            description,
            url,
        };
        this.props.addAdditionalResourse(resoursesInfo);
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('url').value = '';


    }

    componentWillUnmount() {
        const name = document.getElementById('name').value;
        const url = document.getElementById('url').value;
        const description = document.getElementById('description').value;
        const add = {
            name,
            description,
            url,
        };
        // this.props.addAdditionalResourse(add);
    }

    render() {
        const { classes, section } = this.props;
        console.log('section in addResourse ', section);
        return (
            <form className={classes.container} id="titleForm" noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Resource Name"
                    className={classes.textField}
                    type="name"
                    name="name"
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
                <TextField
                    id="url"
                    label="Resource URL"
                    className={classes.textField}
                    type="url"
                    name="url"
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

const mapStateToProps = state => {
    // console.log(' in AddResources >> ', state.sections.current_section);
    const sid = state.sections.current_section;
    const sections = state.firebase.data.app.sections;
    const section = sections ? sections[sid] : null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        section: section,
    };
};



const mapDispatchToProps = dispatch => {
    return {
        addAdditionalResourse: (resoursesInfo) => dispatch(addAdditionalResourse(resoursesInfo))
    };
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(AddResources);