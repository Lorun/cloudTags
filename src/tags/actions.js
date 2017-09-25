import * as types from './actionTypes';
import axios from 'axios';

export function addTag(tag) {
    return {
        type: types.ADD,
        payload: tag
    }
}

export function removeTag(index) {
    return {
        type: types.REMOVE,
        index
    }
}

export function fetchTags() {
    return (dispatch) => {

        // dispatch({
        //     type: types.SAVE
        // });

        axios.get('http://59c41081d201270011552f99.mockapi.io/hashtags/1')
            .then(response => {
                console.log(response);
                // dispatch({
                //     type: types.SAVE
                // });
            });

    }
}

export function saveTags() {
    return (dispatch, getState) => {

        // dispatch({
        //     type: types.SAVE
        // });

        axios.put(
            'http://59c41081d201270011552f99.mockapi.io/hashtags/1',
            {
                hashtags: getState().tags.list
            }
        ).then(response => {
            console.log('SAVED');
        });

    }
}