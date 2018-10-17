import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import AddSection from './addSection';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        zIndex: theme.zIndex.drawer + 1
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
        let sectionArray=['section 1','secton 2','section 3','section 4'];
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
        const { classes } = this.props;
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
                    <AddSection />
                </main>
            </div>
        );
    }
}

DrawerSection.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerSection);
