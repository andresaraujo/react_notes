/* eslint-env mocha */
import React from 'react';
import { assert } from 'chai';
import {shallow} from 'enzyme';
import {IconButton, CardTitle} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NoteCard from './NoteCard';


describe('<NoteCard />', () => {
    const muiTheme = getMuiTheme();
    const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});

    it('renders a note card', () => {
        const wrapper = shallowWithContext(
            <NoteCard id="1" title="myTitle" content="myContent"/>
        );
        assert.strictEqual(wrapper.find(CardTitle).props().title, 'myTitle', 'CardTitle should contain title prop');
        assert.strictEqual(wrapper.find(CardTitle).props().subtitle, 'myContent', 'CardTitle should contain subtitle prop');
        assert.strictEqual(wrapper.find(IconButton).length, 1, 'should contain the delete icon button');
    });
});