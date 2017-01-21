import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addNoteAction, deleteNoteAction} from '../redux/actions'
import AddNote from './AddNote';
import NoteCard from './NoteCard';

const styles = {
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    notes: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
};

class NotesApp extends Component {
    constructor(props){
        super(props);
    }

    renderAddedNotes() {
        const {notes, deleteNote} = this.props;
        return notes.map((i) =>
                    <NoteCard
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        content={i.note}
                        onDone={(id) => deleteNote(id)}
                    />
                )
        ;
    }

    render() {
        const {addNote} = this.props;
        return (
            <div style={styles.container}>
                <h3>A simple notes example</h3>
                <AddNote onAddNote={addNote}/>
                <div style={styles.notes}>
                    {this.renderAddedNotes()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {notes: state.notes}
};
const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNoteAction(note)),
        deleteNote: (noteId) => dispatch(deleteNoteAction(noteId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);