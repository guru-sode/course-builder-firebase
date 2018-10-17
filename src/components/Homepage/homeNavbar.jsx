import React, { Component } from 'react';
import { Grid, AppBar, Toolbar, Typography, withStyles, Button } from '@material-ui/core';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut } from '../../redux/actions/authActions';

const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 0
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

    handleSingOut = () => {
        this.props.signOut();
        return (<Redirect to="/" />)
    };

    render() {
        const { classes, userInfo } = this.props;
        const navigation = userInfo ? (
            <Toolbar>
                <NavLink to="/">
                    < Button onClick={this.handleSingOut}>
                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                            Sign Out
                    </Typography>
                    </Button>
                </NavLink >
            </Toolbar >
        ) : (
                <Toolbar>
                    <NavLink to="/login"><Button>
                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                            Login
                    </Typography>
                    </Button>
                    </NavLink>
                    <NavLink to="/signup"><Button>
                        <Typography className={classes.headerFontColor} variant="h6" noWrap>
                            Sign-Up
                    </Typography>
                    </Button>
                    </NavLink>
                </Toolbar>
            );
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
                                {navigation}
                            </Grid>
                        </Grid>
                    </AppBar>
                </Grid>
            </Grid >

        );
    }
}
const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};
export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
)(HomeNavbar);
// export default withStyles(styles)(HomeNavbar);