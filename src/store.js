import { createStore, combineReducers } from 'redux';
import teams from './team/reducer';


const rootReducer = combineReducers({
    teams,
});

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;