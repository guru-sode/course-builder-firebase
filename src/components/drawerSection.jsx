import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import SectionTitle from './sectionTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';
import AddSection from './addSection';
import { Route } from 'react-router';

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
        height: 'auto'
    },
    toolbar: theme.mixins.toolbar
});

class DrawerSection extends Component {
    constructor(props){
        super(props);
        this.renderList=this.renderList.bind(this);
    }
    renderList(){
        let sectionArray=['section name'];
        return (
            sectionArray.map(section=>{
                return (<List component="nav">
                    <ListItem button>
                        <ListItemText primary={section} />
                    </ListItem>
                </List>);
            })
        );
    }

    render() {
        // const { classes } = this.props;
        const{current_course,store_sections,sid,cid,classes} = this.props;

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
                    {this.renderList()}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Route exact path='/sectionTitle' component={SectionTitle} />
                    <Route exact path='/addResources' component={AddSection} />
                </main>
            </div>
        );
    }
}

// DrawerSection.propTypes = {
//     classes: PropTypes.object.isRequired
// };



const mapStateToProps = state => {
    // console.log(' in addVideo >> ', state.sections.current_section);
    const sid = state.sections.current_section;
    // const sections = state.firebase.data.app.sections;
    const sections = state.sections.sections;
    const cid = state.courses.current_course;
    const app = state.firebase.data?state.firebase.data.app:null;
    const current_course = app ? app.courses[cid]:null;
    return {
        /* getting data from firebase redux store { firebaseReducer as firebase } */
        course:current_course ? current_course :'',
        sections: state.firebase.data.app
            ? state.firebase.data.app['sections']
            : state.courses,
        store_sections:sections?sections:'',
        sid:sid?sid:'',
        cid:cid?cid:''
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
