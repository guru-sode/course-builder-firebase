import React, { Component } from 'react';
import { Grid, AppBar, Toolbar, Typography, withStyles, Button, Select, InputBase, MenuItem, FormControl, Icon } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePageCourseView from './homepageCourseView';
import AccountSetting from './accountSetting';
import { signOut } from '../../redux/actions/authActions';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerFontColor: {
        color: 'white',
    },
    navbar: {
        position: 'relative',
        backgroundColor: '#000a12'
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    heading: {
        marginRight: '1.5em',
    },
    searchTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        color: 'white',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        borderRadius: '0',
    },
    select: {
        visibility: 'hidden',
        width: 200,
        borderRadius: '0'
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    navlink: {
        textDecoration: 'none',
        color: 'white',
    },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    progress: {
        margin: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#000a12'
    },
});

class HomeNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            open: false,
            categoryText: '',
        };
    }

    handlSearchChange = (e) => {
        this.setState({ searchText: e.target.value });
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

    handleSingOut = () => {
        this.props.signOut();
        return (<Redirect to="/" />)
    };

    render() {
        console.log(this.props.app === undefined);
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
                        <Grid className={classes.header} container>
                            <Grid item>
                                <Toolbar className={classes.title}>
                                    <Typography className={classes.heading} variant="h4" color="inherit" noWrap>
                                        Course Creator
                                    </Typography>
                                    <Button className={classes.categories} onClick={this.handleCategoryOpen}>
                                        <Typography className={classes.headerFontColor} variant="p" noWrap>
                                            Categories
                                        </Typography>
                                    </Button>
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
                                </Toolbar>
                            </Grid>
                            <Toolbar>
                                <form className={classes.search} noValidate autoComplete="off">
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        onChange={this.handlSearchChange}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                    />
                                </form>
                                {/* {navigation} */}
                                <div>
                                    <NavLink className={classes.navlink} to="/login">
                                        <Icon className={classes.icon} fontSize="large">
                                            account_circle
                                        </Icon>
                                    </NavLink>
                                </div>
                                <AccountSetting />
                            </Toolbar>
                        </Grid>
                    </AppBar>
                </Grid>
                {this.props.app === undefined ? 
                <Grid className={classes.progressContainer} container><CircularProgress className={classes.progress} size={100} /> </Grid>
                :
                <HomePageCourseView />}
            </Grid >                            
        );
    }
}

const mapStateToProps = state => {
    console.log("data in state >> ", state)
    return {
        // userInfo: state.auth.userInfo,
        app: state.firebase.data ? state.firebase.data.app : ''
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
    firebaseConnect([{
        path: '/app'
    }])
)(HomeNavbar);
// export default withStyles(styles)(HomeNavbar);