import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

import tweets from './tweets.json';


// console.log(tweets.statuses);

class App extends Component {

    onSearch() {
        const result = tweets.statuses.filter((status) => {
            return this.searchTag(status.text, '#node');
        });

        // const regex = /\w+$/;
        // const searchVal = '#node';
        //
        // result.map(status => {
        //     const matched = regex.test('#node');
        //     const matchedContent = searchVal.match(regx);
        //     console.log();
        // });

        console.log(result);
    }

    searchTag(text, hashtag) {
        return text.indexOf(hashtag) !== -1;
    }


    render() {

        this.onSearch();

        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
