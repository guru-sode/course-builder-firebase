import React, { Component } from 'react';
import { Typography, Card, CardContent, CardActions, CardMedia, withStyles, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';


const styles = theme => ({
    myCourseContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        flexWrap: 'wrap'
    },
    card: {
        margin: '1em',
        width: 300,
        height: 300,
        wordWrap: 'break-word',
    },
    media: {
        height: 140,
        backgroundColor: '#b22a00',
    }
});

class ViewMyCourse extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.myCourseContainer} container>
                {this.props.courses.length !== 0 ?
                    this.props.courses.map((course) => {
                        return (<Grid item md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.media}  />
                                <CardContent>
                                    <Typography component="h2">
                                        {course.title}
                                    </Typography>
                                    <Typography component="h4">
                                        {course.category}
                                    </Typography>
                                    <Typography component="p">
                                        {course.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" size="small">Add Sections</Button>
                                </CardActions>
                            </Card>
                        </Grid>);
                    }) :
                    <Typography component="h1">No Courses Created</Typography>}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    courses: state,
});

export default connect(mapStateToProps, null)(withStyles(styles)(ViewMyCourse));