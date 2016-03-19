import * as React from "react";
import * as ReactDOM from "react-dom";

export class MyComponent extends React.Component<{}, {}> {
    node: Node;

    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
    }

    componentWillReceiveProps(newProps) {}
    shouldComponentUpdate(nextProps, nextState): boolean;
    componentWillUpdate(nextProps, nextState) {}
    componentDidUpdate(prevProps, prevState): void;
    componentWillUnmount() {}

    render() {
        return (<div></div>)
    }
}