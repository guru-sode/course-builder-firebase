import React, { Component } from 'react';
import CreateCourse from './components/createACourse';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import DrawerSection from './components/drawerSection';
import HomeNavbar from './components/Homepage/homeNavbar';
import Login from './components/Homepage/login';
import SignUp from './components/Homepage/signUp';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class App extends Component {
    render() {
        const { userInfo } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={HomeNavbar} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path='/addSection' component={DrawerSection} />
                    <Route exact path='/createCourse' component={CreateCourse} />
                    <Route path="/" render={() => (
                        userInfo ? (<Redirect to="/createCourse" />)
                            : (<Redirect to="/" />)
                    )} />
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo
    };
};
export default connect(mapStateToProps, null)(App);