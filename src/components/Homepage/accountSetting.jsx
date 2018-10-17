import React, { Component } from 'react';
import { Grid, AppBar, Toolbar, Typography, withStyles, Button, Select, InputBase, MenuItem, FormControl, Icon } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePageCourseView from './homepageCourseView';
import { signOut } from '../../redux/actions/authActions';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        borderRadius: '0',
    },
});

class AccountSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            categoryText: '',
        };
    }


    handleCategoryOpen = () => {
        this.setState({ open: true });
    }

    handleCategoryClose = () => {
        this.setState({ open: false });
    }

    handleCategoryChange = (e) => {
        console.log(e.target.value);
        this.setState({ categoryText: e.target.value })
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <FormControl className={classes.formControl}>
                    <Select
                        className={classes.select}
                        open={this.state.open}
                        onClose={this.handleCategoryClose}
                        onOpen={this.handleCategoryOpen}
                        value={this.state.categorySearch}
                        onChange={this.handleCategoryChange}
                    >
                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                        <MenuItem value="HTML">HTML</MenuItem>
                        <MenuItem value="CSS">CSS</MenuItem>
                        <MenuItem value="CSS">CSS</MenuItem>
                        <MenuItem value="CSS">CSS</MenuItem>
                        <MenuItem value="CSS">CSS</MenuItem>
                        <MenuItem value="CSS">CSS</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        );
    }
}

export default withStyles(styles)(AccountSetting);