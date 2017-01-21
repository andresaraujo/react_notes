import React, {Component} from 'react';
import {FlatButton, Card, CardActions, CardTitle} from 'material-ui';

const style = {
    width: '280px',
    marginTop: '20px',
    marginLeft: '20px'
};

const NoteCard = ({id, title, content, onDone}) =>
    <Card style={style}>
        <CardTitle title={title} subtitle={content}/>
        <CardActions>
            <FlatButton label="Done" primary={true} onClick={() => onDone(id)} />
        </CardActions>
    </Card>
    ;


export default NoteCard;