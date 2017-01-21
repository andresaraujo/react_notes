import {ADD_NOTE, DELETE_NOTE} from './actions';

const initialState = {
    notes: [],
};

function noteListReducer(state = initialState.notes, action) {
    switch (action.type) {
        case ADD_NOTE:
            const note = {
                id: action.id,
                title: action.title,
                note: action.note,
                createdAt: action.createdAt
            };
            return [note, ...state];
        case DELETE_NOTE:
            return state.filter((n) => n.id !== action.id);
        default:
            return state
    }
}

export {noteListReducer};