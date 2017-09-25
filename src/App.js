import React, { Component } from 'react';
import './App.css';
import TagSearch from './tags/components/TagSearch';
import TagCloud from './tags/components/TagCloud';



class App extends Component {

    render() {
        return (
            <div className="App">
                <TagSearch/>
                <TagCloud/>
            </div>
        );
    }
}

export default App;
