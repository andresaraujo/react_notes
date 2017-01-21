import React, {Component} from 'react';
import {RaisedButton, TextField, Card, CardText, CardActions} from 'material-ui';

const container = {
    width: '80%',
    marginTop: '20px',
    marginBottom: '20px',
};

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.onAddNote = this.onAddNote.bind(this);

        this.state = {title: '', note: ''};
    }

    onAddNote() {
        const {onAddNote} = this.props;
        const {title, note} = this.state;

        if(title || note) {
            onAddNote({title, note});
            this.setState({title: '', note: ''});
        }
    }

    render() {

        return (
        <Card style={container}>
            <CardText>
                <TextField
                    hintText="Title"
                    fullWidth={true}
                    onChange={(event) => this.setState({title: event.target.value})}
                    value={this.state.title}
                />
                <TextField
                    hintText="Add note"
                    fullWidth={true}
                    multiLine={true}
                    rows={2}
                    onChange={(event) => this.setState({note: event.target.value})}
                    value={this.state.note}
                />
            </CardText>
            <CardActions>
                <RaisedButton label="Done" primary={true} onClick={this.onAddNote} />
            </CardActions>
        </Card>

        )
    }
}


export default AddNote;