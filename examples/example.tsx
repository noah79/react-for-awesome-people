import * as React from "react";

export interface MyProps {
    startingCount?:number;
}

export interface MyState {
    count:number;
}

export class MyComponent extends React.Component<MyProps, MyState> {
    static defaultProps = {
        startingCount: 0
    }

    constructor(props, state) {
        super(props, state);
        this.state = {count: props.startingCount};
    }

    render() {
        return (<div className="my-component">
            <button onClick={() => {this.setState({count: this.state.count + 1})}}>Click Me!</button>
            <span style={{marginLeft: 5}}>I've been clicked {this.state.count} times.</span>
        </div>)
    }
}