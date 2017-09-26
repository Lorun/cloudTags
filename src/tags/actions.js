import * as types from './actionTypes';
import axios from 'axios';

export function addTag(tag) {
    return {
        type: types.ADD,
        payload: tag,
        lastUpdated: Date.now()
    }
}

export function removeTag(index) {
    return {
        type: types.REMOVE,
        index,
        lastUpdated: Date.now()
    }
}

export function fetchTags() {
    return (dispatch, getState) => {

        dispatch({type: types.FETCH});

        axios.get('http://59c41081d201270011552f99.mockapi.io/hashtags/1')
            .then(response => {
                if (response.data) {
                    const currentState = getState().tags;
                    const hashtags = (response.data.lastUpdated > currentState.lastUpdated) ? JSON.parse(response.data.hashtags) : currentState.list;
                    dispatch({
                        type: types.FETCH_SUCCESS,
                        payload: hashtags,
                        lastUpdated: Date.now()
                    });
                }
            });
    }
}

export function saveTags() {
    return (dispatch, getState) => {
        const currentTags = getState().tags.list;

        dispatch({type: types.SAVE});

        axios.put(
            'http://59c41081d201270011552f99.mockapi.io/hashtags/1',
            {
                hashtags: JSON.stringify(currentTags),
                lastUpdated: Date.now()
            }
        ).then(response => {
            dispatch({type: types.SAVE_SUCCESS});
            console.log('SAVED');
        });

    }
}