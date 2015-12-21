import React, { PropTypes } from 'react';
import connectModel from './../source/connectModel';

@connectModel({ sourcePath: '/navigation/model.json' })
export default class Navigation extends React.Component {

    static contextTypes = {
        model: PropTypes.object.isRequired
    }

    componentWillMount() {
        console.log("CONTEXT MODEL:::::", this.context.model);
    }

    render() {
        return (
            <nav>TEST</nav>
        )
    }
}