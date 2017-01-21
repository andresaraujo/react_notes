import {createUuid} from './util'

const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

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

export {ADD_NOTE, DELETE_NOTE, addNoteAction, deleteNoteAction};