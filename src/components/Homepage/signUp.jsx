import React, { Component } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent, Button, CardActions, withStyles, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { signUp } from '../../redux/actions/authActions';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1em',
    },
    card: {
        width: 400,
        height: 400,
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
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    submitSignupForm = () => {
        this.props.signUp(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.main}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <Typography variant="title" align="center" gutterBottom>
                                Enter Your Email Id
                            </Typography>
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
                            />
                            <Typography variant="title" align="center" gutterBottom>
                                Enter A Username
                            </Typography>
                            <TextField
                                id="username-input"
                                onChange={this.handleUsernameChange}
                                label="Username"
                                className={classes.textField}
                                type="text"
                                name="username"
                                margin="normal"
                                variant="outlined"
                            />
                            <Typography variant="title" align="center" gutterBottom>
                                Enter a Password
                            </Typography>
                            <TextField
                                id="password-input"
                                onChange={this.handlePasswordChange}
                                label="password"
                                className={classes.textField}
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                            />
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.submitSignupForm} variant="contained" color="primary" align="end">Sign Up</Button>
                        </CardActions>
                    </Card>
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