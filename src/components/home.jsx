import React, { Component } from 'react';
import '../styles/home.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Button, Input, NativeSelect } from '@material-ui/core';
import ImageBody from './imageBody';
import CreateCourse from './createCourse';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyItem: "space-between",
  },
  main: {
    justifyContent: "space-around",
  },
  AppBar: {
    backgroundColor: '#35baf6',
    position: "relative"
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Grid container className={classes.root}>
          <Grid container className={classes.main}>
            <h1>Course Creator</h1>
          </Grid>
          <Grid container>
            <AppBar className={classes.AppBar}>
              <Toolbar className={classes.main}>
                  <Button><NavLink to="/view/all/courses">View All Courses</NavLink></Button>
                  <Button><NavLink to="/create/course">Create a Course</NavLink></Button>
                <Grid item>
                  <Button htmlFor="age-native-helper">Categories</Button>
                  <NativeSelect value="Categories">
                    <option value="" />
                    <option>Software Development</option>
                    <option>Science</option>
                    <option>Art</option>
                  </NativeSelect>
                </Grid>
                <Grid item>
                  <Input placeholder="Search" />
                  <Button>Search</Button>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Route path="/create/course" component={CreateCourse} />
          <Route exact path="/" component={ImageBody} />
        </Grid>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(Home);