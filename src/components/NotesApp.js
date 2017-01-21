import React, {Component} from 'react';

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

        this.state = {noteList: []};

        this.addNote = this.addNote.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    addNote({title, note, id}) {
        const noteList = [{title, note, id}, ...this.state.noteList];
        this.setState({noteList});

        console.log(this.state);
    }

    onDone({id}) {
        const noteList = this.state.noteList.filter((n) => n.id !== id);
        this.setState({noteList});
    }

    renderAddedNotes() {
        const {noteList} = this.state;
        return noteList.map((i) =>
                    <NoteCard
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        content={i.note}
                        onDone={this.onDone}
                    />
                )
        ;
    }

    render() {
        return (
            <div style={styles.container}>
                <h3>A simple notes example</h3>
                <AddNote onAddNote={this.addNote}/>
                <div style={styles.notes}>
                    {this.renderAddedNotes()}
                </div>
            </div>
        );
    }
}

export default NotesApp;