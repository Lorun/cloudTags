import * as types from './actionTypes';

const initialState = {
    list: [],
    isFetching: false
};

const ACTION_HANDLERS = {
    [types.ADD]: (state, action) => ({
        ...state,
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
            list: newList
        };
    },
    [types.SAVE]: (state, action) => {
        return {
            ...state,
            isFetching: true
        };
    }
};


export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}