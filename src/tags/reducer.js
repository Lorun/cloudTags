import * as types from './actionTypes';

const initialState = {
    list: [],
    isFetching: false,
    isSaving: false,
    lastUpdated: null
};

const ACTION_HANDLERS = {
    [types.FETCH]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [types.FETCH_SUCCESS]: (state, action) => ({
        ...state,
        list: action.payload,
        isFetching: false,
        lastUpdated: action.lastUpdated
    }),
    [types.ADD]: (state, action) => ({
        ...state,
        lastUpdated: action.lastUpdated,
        list: [
            ...state.list,
            action.payload
        ]
    }),
    [types.REMOVE]: (state, action) => {
        let newList = [...state.list];
        newList.splice(action.index, 1);
        return {
            ...state,
            lastUpdated: action.lastUpdated,
            list: newList
        };
    },
    [types.SAVE]: (state, action) => {
        return {
            ...state,
            isSaving: true
        };
    },
    [types.SAVE_SUCCESS]: (state, action) => {
        return {
            ...state,
            isSaving: false
        };
    }
};


export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}