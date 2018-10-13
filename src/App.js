import React, { Component } from 'react';
import './styles/App.css';
import CreateCourse from './components/createACourse';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CreateCourse />
            </div>
        );
    }
}

export default App;
