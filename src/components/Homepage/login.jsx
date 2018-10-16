import React, { Component } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent, Button, CardActions, withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { signIn } from '../../redux/actions/authActions';
import HomeNavbar from './homeNavbar';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1em',
    },
    card: {
        width: 400,
        height: 'auto',
        padding: '1em',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
});

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorFlagEmail: false,
            errorFlagPassword: false,
        };
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value, errorFlagEmail: false })
    }


    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value, errorFlagPassword: false })
    }

    submitLoginForm = () => {
        const emailRegex = /[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9-]*[a-z0-9]/;
        if(this.state.email === '' || !emailRegex.test(this.state.email)) {
            this.setState({ errorFlagEmail: true});
        }
        if(this.state.password === '') {
            this.setState({ errorFlagPassword: true});
        }
        if(this.state.errorFlagEmail === false && this.state.errorFlagPassword === false) {
            const loginDetails = {
                email: this.state.email,
                password: this.state.password,
            }
            this.props.signIn(loginDetails);
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
                                onChange={this.handleEmailChange}
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                error={this.state.errorFlagEmail}
                                helperText={this.state.errorFlagEmail ? 'Invalid Email' : ''}
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
                                helperText={this.state.errorFlagPassword ? 'Password Required' : ''}
                            />
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.submitLoginForm} variant="contained" color="primary" align="end">Login</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Grid>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signIn: (userInfo) => dispatch(signIn(userInfo)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(Login);
// export default withStyles(styles)(Login);