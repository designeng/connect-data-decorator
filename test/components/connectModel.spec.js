import React from 'react';
import ReactDom from 'react-dom';
import { expect } from 'chai'; 

import connectModel from '../../source/connectModel';

class NoopComponent extends React.Component {
    render() {
        return <div></div>
    }
}

describe('connectModel',  () => {

    let root = {}

    const before = () => {
        root._rootElement = document.createElement("div");
        document.body.appendChild(root._rootElement);
    }

    beforeEach(before);

    it('should throw error with zero config', () => {
        try {
            let connection = new connectModel({});
        } catch (error) {
            expect(error.message).to.be.a('string');
            expect(error.message).to.equal('Falcor model sourcePath should be provided!');
        }
    });

    it('should be an instance of react component', () => {
        let connection = connectModel({ sourcePath: '/navigation/model.json' })(NoopComponent);
        expect(new connection).to.be.an.instanceof(React.Component);
    });

});