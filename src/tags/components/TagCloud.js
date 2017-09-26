import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tagActions from '../actions';

import './tagCloud.css';


class TagCloud extends Component {

    constructor(props) {
        super(props);

        this.onClickSave = this.onClickSave.bind(this);
    }

    componentDidMount() {
        this.props.fetchTags();
    }

    onClickDeleteTag(index) {
        return (e) => {
            this.props.removeTag(index);
        }
    }

    onClickSave() {
        this.props.saveTags();
    }

    render() {
        return(
            <div className="tagCloud">
                {this.props.isFetching ? <div className="tagCloud-uploading">Updating...</div> : ''}
                <div className="tagCloud-area">
                    {this.props.list.map((tag, index) => (<span key={index} className="tagCloud-tag">{tag} <button onClick={this.onClickDeleteTag(index)} className="tagCloud-tagDelete">×</button></span>))}
                </div>

                <div className="tagCloud-controls">
                    <button onClick={this.onClickSave} className="btn">
                        {this.props.isSaving ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.tags
});
const mapDispatchToProps = dispatch => bindActionCreators({...tagActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud);