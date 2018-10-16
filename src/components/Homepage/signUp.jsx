import React, { Component } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent, Button, CardActions, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1em',
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
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.main} spacing={24}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <Typography variant="title" align="center" gutterBottom>
                               Enter Your Email Id
                            </Typography>
                            <TextField
                                id="email-input"
                                label="Email"
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
                                label="password"
                                className={classes.textField}
                                type="password"
                                name="password"
                                margin="normal"
                                variant="outlined"
                            />
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" align="end">Sign Up</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SignUp);