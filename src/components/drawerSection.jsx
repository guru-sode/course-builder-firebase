import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import SectionTitle from './sectionTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import AddSection from './addSection';
import { Route } from 'react-router';
import { MenuItem, Button, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import addResources from './addResources';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '1000px',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#000a12'
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
        height: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    menuItem: {
        '&:focus': {
            backgroundColor: '#bdbdbd',
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    overview: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5em',
    }
});

class DrawerSection extends Component {
    render() {

        const { course, store_sections, sid, cid, sections, classes } = this.props;
        const sids = course.section;
        console.log(course);
        let section_list;
        console.log(sections);
        section_list = sids.map((sid) => {
            if (sections[sid] !== undefined) {
                return (
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary={sections[sid].title} />
                        </ListItem>
                    </List>);
            }
        });

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Add section
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.toolbar} />
                    <MenuItem className={classes.menuItem}>
                        {section_list}
                    </MenuItem>
                    <NavLink to={`/view/sectionTitle`}><Button className={classes.addSectionButton}>Add Section</Button></NavLink>
                    <NavLink to={`/view/addResources`}><Button className={classes.addSectionButton}>addResources</Button></NavLink>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid className={classes.overview} container spacing={24}>
                        <Grid item><Typography style={{ textAlign: 'center' }} variant="h1">{course.title}</Typography></Grid>
                        <Grid item><Typography variant="h4">Overview</Typography></Grid>
                        <Grid item><Typography variant="p">{course.description}</Typography></Grid>
                        <Grid item><Typography variant="h4">Sections</Typography></Grid>
                        <Grid item>
                            {section_list = sids.map((sid) => {
                                if (sections[sid] !== undefined) {
                                    return (
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography variant="h6">{sections[sid].title}</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography variant="p">{sections[sid].description}</Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>);
                                }
                            })}
                        </Grid>
                    </Grid>
                    <Route exact path='/view/sectionTitle' component={SectionTitle} />
                    <Route exact path='/view/addResources' component={AddSection} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const sid = state.sections.current_section;
    const sections = state.firebase.data.app.sections;
    const local_sections = state.sections.sections;
    const cid = state.courses.current_course;
    const app = state.firebase.data ? state.firebase.data.app : null;
    const current_course = app ? app.courses[cid] : null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        course: current_course ? current_course : '',
        sections: state.firebase.data.app
            ? state.firebase.data.app['sections']
            : state.courses,
        store_sections: sections ? sections : '',
        sid: sid ? sid : '',
        cid: cid ? cid : ''
    };
};

/*  composing multiple connecter  */
export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        null
    ),
    firebaseConnect([
        {
            path: '/app'
        }
    ])
)(DrawerSection);
