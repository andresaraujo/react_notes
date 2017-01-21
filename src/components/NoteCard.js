import React from 'react';
import {IconButton, Card, CardActions, CardTitle, Divider} from 'material-ui';
import {amber500} from 'material-ui/styles/colors';


const styles = {
    container: {
        width: '280px',
        marginTop: '20px',
        marginLeft: '20px'
    },
    icon: {
        color: amber500,
    }
};

const NoteCard = ({id, title, content, onDone}) =>
    <Card style={styles.container}>
        <CardTitle title={title} subtitle={content}/>
        <Divider />
        <CardActions>
            <IconButton
                iconClassName="material-icons"
                iconStyle={styles.icon}
                onClick={() => onDone(id)}
            >
                delete
            </IconButton>
        </CardActions>
    </Card>
    ;


export default NoteCard;