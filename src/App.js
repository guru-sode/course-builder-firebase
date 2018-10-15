import React, { Component } from 'react';
import './styles/App.css';
import CreateCourse from './components/createACourse';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import DrawerSection from './components/drawerSection';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' component={CreateCourse} />
                    <Route exact path='/addSection' component={DrawerSection} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
