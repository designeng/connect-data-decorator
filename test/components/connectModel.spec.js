import React from 'react';
import ReactDom from 'react-dom';
import { expect } from 'chai'; 

import ConnectModel from '../../source/connectModel';

describe('connectModel',  () => {

    let root = {}

    const before = () => {
        root._rootElement = document.createElement("div");
        document.body.appendChild(root._rootElement);
    }

    beforeEach(before);

    it('should throw error with zero config', () => {
        try {
            let connect = new ConnectModel({});
        } catch (error) {
            assert.equal(error.message, 'Falcor model sourcePath should be provided!');
        }
    });

    it('should create react component', () => {
        let connect = new ConnectModel({ sourcePath: '/navigation/model.json' });
        expect(connect instanceof React.Component).to.be(true);
    });

});