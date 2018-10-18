import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <AddVideos videos/>
            </div>
        );
    }
}

export default App;
