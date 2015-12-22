import React, { PropTypes } from 'react';
import connectModel from './../source/connectModel';

@connectModel({ sourcePath: '/navigation/model.json' })
export default class Navigation extends React.Component {

    render() {
        return (
            <nav>TEST</nav>
        )
    }
}