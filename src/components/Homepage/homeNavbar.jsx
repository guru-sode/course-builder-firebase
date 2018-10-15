import React, { Component } from 'react';
import { Grid, AppBar, Toolbar, Typography, withStyles, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    header: {
        alignSelf: 'center',
    },
    headerOptions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerFontColor: {
        color: 'white',
    },
    navbar: {
        position: 'relative',
    }
});

class HomeNavbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.appBar} container>
                <Grid item>
                    <AppBar className={classes.navbar} position="absolute">
                        <Grid className={classes.header} item>
                            <Toolbar>
                                <Typography variant="h4" color="inherit" noWrap>
                                    Course Creator
                                </Typography>
                            </Toolbar>
                        </Grid>
                        <Grid className={classes.headerOptions} container>
                            <Grid item>
                                <Toolbar>
                                    <Button>
                                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                                            Categories
                                        </Typography>
                                    </Button>
                                </Toolbar>
                            </Grid>
                            <Grid item>
                                <Toolbar>
                                    <NavLink to="/login"><Button>
                                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                                            Login
                                        </Typography>
                                    </Button>
                                    </NavLink>
                                    <Button>
                                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                                            Logout
                                        </Typography>
                                    </Button>
                                    <NavLink to="/signup">><Button>
                                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                                            Sign-Up
                                        </Typography>
                                    </Button>
                                    </NavLink>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </AppBar>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomeNavbar);