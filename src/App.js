import React, { Component } from 'react';
import './styles/App.css';
import DrawerSection from './components/drawerSection';

class App extends Component {
    render() {
        return (
            <div className="App">
                <DrawerSection />
            </div>
        );
    }
}

export default App;
