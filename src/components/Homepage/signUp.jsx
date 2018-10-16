import React, { Component } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent, Button, CardActions, withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { signUp } from '../../redux/actions/authActions';
import HomeNavbar from './homeNavbar';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1em',
    },
    card: {
        width: 400,
        height: 450,
        padding: '1em',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    }
});

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            errorFlagEmail: false,
            errorFlagUsername: false,
            errorFlagPassword: false,
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value, errorFlagEmail: false })
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value, errorFlagUsername: false })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value, errorFlagPassword: false })
    }

    submitSignupForm = () => {
        const emailRegex = /[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9-]*[a-z0-9]/
        if(this.state.username === '') {
            this.setState({ errorFlagUsername: true});
        }
        if(this.state.email === '' || !emailRegex.test(this.state.email)) {
            this.setState({ errorFlagEmail: true});
        }
        if(this.state.password === '') {
            this.setState({ errorFlagPassword: true});
        }
        if(this.state.errorFlagEmail === false && this.state.errorFlagUsername === false && this.state.errorFlagPassword === false) {
            const signUpDetails = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            }
            this.props.signUp(signUpDetails);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container>
            <HomeNavbar />
            <Grid container className={classes.main}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <TextField
                                id="email-input"
                                label="Email"
                                onChange={this.handleEmailChange}
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                error={this.state.errorFlagEmail}
                                helperText={this.state.errorFlagEmail ? 'invalid email' : ''}
                            />
                            <TextField
                                id="username-input"
                                onChange={this.handleUsernameChange}
                                label="Username"
                                className={classes.textField}
                                type="text"
                                name="username"
                                margin="normal"
                                variant="outlined"
                                error={this.state.errorFlagUsername}
                                helperText={this.state.errorFlagUsername ? 'Required' : ''}
                            />
                            <TextField
                                id="password-input"
                                onChange={this.handlePasswordChange}
                                label="Password"
                                className={classes.textField}
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                                error={this.state.errorFlagPassword}
                                helperText={this.state.errorFlagPassword ? 'Required' : ''}
                            />
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.submitSignupForm} variant="contained" color="primary" align="end">Sign Up</Button>
                        </CardActions>
                    </Card>
                </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (userInfo) => dispatch(signUp(userInfo)),
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles),
    /* connecting firebase redux store */
    firebaseConnect([{
        path: '/app'
    }])
)(SignUp);
// export default withStyles(styles)(SignUp);