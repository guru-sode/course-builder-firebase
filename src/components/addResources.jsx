import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addAdditionalResourse, addAdditionalResourseToStore } from '../redux/actions/sectionActions';

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
        if(name!==''&&url!==''&&description!=='')
            this.props.addAdditionalResourse(resoursesInfo);
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('url').value = '';


    }

    componentWillUnmount() {
        const name = document.getElementById('name').value;
        const url = document.getElementById('url').value;
        const description = document.getElementById('description').value;
        const resoursesInfo = {
            name,
            description,
            url,
        };
        if(name!==''&&url!==''&&description!=='')
            this.props.addAdditionalResourse(resoursesInfo);
    }

    render() {
        const { classes } = this.props;

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
                    multiline={true}
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


const mapDispatchToProps = dispatch => {
    return {
        addAdditionalResourse: (resoursesInfo) => dispatch(addAdditionalResourse(resoursesInfo)),
        addAdditionalResourseToStore: (resoursesInfo) => dispatch(addAdditionalResourseToStore(resoursesInfo))
    };
};

export default compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(AddResources);