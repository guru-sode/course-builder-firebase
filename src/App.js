import React, { Component } from 'react';
import './styles/App.css';
import AddSection from './components/addSection';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddSection />
            </div>
        );
    }
}

export default App;
