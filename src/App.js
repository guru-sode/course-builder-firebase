import React, { Component } from 'react';
import CreateCourse from './components/createACourse';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import DrawerSection from './components/drawerSection';
import HomeNavbar from './components/Homepage/homeNavbar';
import Login from './components/Homepage/login';
import SignUp from './components/Homepage/signUp';
import { connect } from 'react-redux';
import AddSection from './components/addSection';
import sectionTitle from './components/sectionTitle';
import HomePageCourseView from './components/Homepage/homepageCourseView';

class App extends Component {
    render() {
        const { userInfo } = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={HomeNavbar} />
                    <Route exact path="/" component={HomePageCourseView} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path='/addResources' component={DrawerSection} />
                    <Route exact path='/sectionTitle' component={DrawerSection} />
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