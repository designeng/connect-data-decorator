import React from 'react';
import ReactDom from 'react-dom';

import Navigation from '../../example/navigation';

// TODO: root -> this (mocha, es6 ?)
let root = {}

describe('components rendering',  () => {

    const before = () => {
        root._rootElement = document.createElement("div");
        document.body.appendChild(root._rootElement);
    }

    beforeEach(before);

    it('should render application',  () => {
        ReactDom.render(<Navigation />, root._rootElement);
        assert.equal(document.querySelector('nav').innerHTML, 'TEST');
    });
});