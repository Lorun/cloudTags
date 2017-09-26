import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tagActions from '../actions';

import './tagSearch.css';
import tweets from '../../tweets.json';


const pushOnlyUnique = (arr, values) => {
    const newArray = [...arr];
    values.map(val => {
        newArray.indexOf(val) === -1 && newArray.push(val);
        return true;
    });
    return newArray;
};


const initialState = {
    matchedTags: [],
    query: ''
};

class TagSearch extends Component {

    constructor(props) {
        super(props);

        this.state = initialState;

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const value = e.target.value;
        const query = ('#' + value.replace(/#?(.*)/i, "$1")).toLowerCase();
        const regex = new RegExp(query + '.*?\\b', 'g');
        let matchedTags = [];

        if(query.length > 1) {
            tweets.statuses.map((status) => {
                const matched = status.text.toLowerCase().match(regex);
                if (matched)
                    matchedTags = pushOnlyUnique(matchedTags, matched);
                return true;
            });
        }

        this.setState({
            matchedTags
        });

        this.setState({
            query: value
        });
    }

    handleAddTag(tag) {
        return () => {
            if (this.props.list.indexOf(tag) === -1) {
                this.props.addTag(tag);
                this.setState(initialState);
            } else {
                alert('The same hashtag has already been added!');
            }
        }
    }

    render() {
        let completedTags = '';

        if (this.state.matchedTags.length)
            completedTags = (
                <ul className="tagSearch-results">
                    {this.state.matchedTags.map((tag, i) => (
                        <li key={i} onClick={this.handleAddTag(tag)}>{tag}</li>
                    ))}
                </ul>
            );

        return(
            <div className="tagSearch">
                <input type="text" onChange={this.onChange} value={this.state.query} placeholder="Hashtag" />
                {completedTags}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.tags
});
const mapDispatchToProps = dispatch => bindActionCreators({...tagActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagSearch);