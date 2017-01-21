import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { noteListReducer } from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

    const reducers = combineReducers({
        notes: noteListReducer,
    });

    let enhancer = applyMiddleware(thunk);

    if(window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
    }


    const store = createStore(reducers, initialState, enhancer);
    console.log(store.getState());
    return store;
}