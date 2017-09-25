import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tagActions from '../actions';


class TagCloud extends Component {

    constructor(props) {
        super(props);

        this.onClickSave = this.onClickSave.bind(this);
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
                <div className="tagCloud-area">
                    {this.props.list.map((tag, index) => (<span key={index}>{tag} <button onClick={this.onClickDeleteTag(index)}>×</button></span>))}
                </div>

                <div>
                    <button onClick={this.onClickSave}>Save</button>
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