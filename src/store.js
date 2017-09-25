import { createStore, combineReducers, applyMiddleware } from 'redux';
import tags from './tags/reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    tags,
});

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;