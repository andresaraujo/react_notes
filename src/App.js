import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotesApp from './components/NotesApp';

import './App.css';


const App = () => (
    <MuiThemeProvider>
        <NotesApp />
    </MuiThemeProvider>
);

export default App;
