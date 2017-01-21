import 'whatwg-fetch';
import {createUuid} from './util'

const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const FETCH_NOTES = 'FETCH_NOTES';

function addNoteAction({title, note}) {
    return {
        type: ADD_NOTE,
        id: createUuid(),
        title: title,
        note: note,
        createdAt: Date.now()
    }
}

function deleteNoteAction(id) {
    return {
        type: DELETE_NOTE,
        id: id,
    }
}

function fetchNotesAction(notes) {
    return {
        type: FETCH_NOTES,
        notes,
    }
}

function fetchNotesAsync() {
    return (dispatch) => {
        fetch('data.json')
            .then((res) => res.json())
            .then((res) => {
                dispatch(fetchNotesAction(res))
            });
    };

}

export {ADD_NOTE, DELETE_NOTE, FETCH_NOTES, addNoteAction, deleteNoteAction, fetchNotesAsync};