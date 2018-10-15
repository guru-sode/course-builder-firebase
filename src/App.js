import React, { Component } from 'react';
import './styles/App.css';
import CreateCourse from './components/createACourse';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    {/* <CreateCourse /> */}
                </div>
            < /Router>
        );
    }
}        
export default App;
