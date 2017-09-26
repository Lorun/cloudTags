import React from 'react';
import './App.css';
import TagSearch from './tags/components/TagSearch';
import TagCloud from './tags/components/TagCloud';


const App = () => (
    <div className="App">
        <TagSearch/>
        <TagCloud/>
    </div>
);

export default App;
