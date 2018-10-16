import React, { Component } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent, Button, CardActions, withStyles, Typography } from '@material-ui/core';

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
    }
});

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }


    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    submitLoginForm = () => {
        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.main}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <Typography variant="title" align="center" gutterBottom>
                               Enter Email
                            </Typography>
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
                            />
                            <Typography variant="title" align="center" gutterBottom>
                                Enter Password
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
                            <Button onClick={this.submitLoginForm} variant="contained" color="primary" align="end">Login</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Login);