import React, { Component } from 'react';
import CreateCourse from './components/createACourse';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import DrawerSection from './components/drawerSection';
import HomeNavbar from './components/Homepage/homeNavbar';
import Login from './components/Homepage/login';
import SignUp from './components/Homepage/signUp';

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Route path="/" component={HomeNavbar} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </BrowserRouter>

        // <BrowserRouter>
        //     <div className="App">
        //         <Route exact path='/' component={CreateCourse} />
        //         <Route exact path='/addSection' component={DrawerSection} />
        //     </div>
        // </BrowserRouter>
        );
    }
}



export default App;
