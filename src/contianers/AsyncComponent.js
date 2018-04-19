// author: DELL
// created:2018/4/18 16:32
import React, {Component} from "react";

export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {Component: AsyncComponent.Component};

        }
        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({Component})
                })
            }
        }

        render() {
            const {Component} = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }

    return AsyncComponent;
}
