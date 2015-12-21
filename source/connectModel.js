import Falcor from "falcor";
import FalcorDataSource from 'falcor-http-datasource';
import React from "react";

export default function(config) {

    if (!config.sourcePath) {
        throw new Error('Falcor model sourcePath should be provided!');
    }

    let model = new Falcor.Model({
        source: new FalcorDataSource(config.sourcePath)
    });

    return function(component) {
        const Component = component;
        return class ConnectModelComponent extends React.Component {

            constructor(props) {
                super(props);
                this.state = { model: model };
            }

            static childContextTypes = {
                model: React.PropTypes.object.isRequired
            };

            getChildContext() {
                return { model: this.state.model };
            }

            render() {
                return <Component {...this.props} />;
            }

        };
    };
}