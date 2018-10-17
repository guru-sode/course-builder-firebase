import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    withStyles, Grid, Typography, Paper, Card, CardContent, CardActions, CardMedia, Button,
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    introCard: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
    },
    introCardInfo: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
        textAlign: 'center',
    },
    introItems: {
        maxWidth: 'none !important',
        flexBasis: '100% !important',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexBasis: '100%',
        marginTop: '2em',
        justifyContent: 'space-around !important',
    },
    cardMedia: {
        paddingTop: '20%', // 16:9
        height: 45,
        backgroundColor: '#000a12'
    },
    cardContent: {
        flexGrow: 1,
    },
    cardItem: {
        width: '350px'
    }
});

class HomePageCourseView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, app } = this.props;
        console.log('this is app', app);
        return (
            <Grid container>
                <Card className={classes.introCard}>
                    <Grid container>
                        <Grid className={classes.introItems} item md={6}>
                            <div className={classes.introCardInfo}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    About Us
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    Course builder is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an extensive library of over 80,000 courses taught by expert instructors.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <Grid container className={classes.card} spacing={40}>
                    <Card className={classes.cardItem}>
                        <CardMedia
                            className={classes.cardMedia}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Section 1</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    console.log("data in state >> ", state);
    return {
        app: state.firebase.data ? state.firebase.data.app : ''
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        null
    ),
    firebaseConnect([{
        path: '/app'
    }])
)(HomePageCourseView);


