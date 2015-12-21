import Falcor from "falcor";
import React from "react";

export default function(config) {
    return function(component) {
        const Component = component;
        return class ConnectModel extends React.Component {

            constructor(props) {
                super(props);
                this.state = { model: new Falcor.Model(config) };
            }

            static childContextTypes = {
                model: React.PropTypes.object.isRequired
            };

            static displayName = "Falcor Root (" + (component.displayName || component.name || "Anonymous Component") + ")"

            getChildContext() {
                return { model: this.state.model };
            }

            render() {
                return <Component {...this.props} />;
            }

        };
    };
}