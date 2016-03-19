"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props, state) {
        _super.call(this, props, state);
        this.state = { count: props.startingCount };
    }
    MyComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "my-component"}, React.createElement("button", {onClick: function () { _this.setState({ count: _this.state.count + 1 }); }}, "Click Me!"), React.createElement("span", {style: { marginLeft: 5 }}, "I've been clicked ", this.state.count, " times.")));
    };
    MyComponent.defaultProps = {
        startingCount: 0
    };
    return MyComponent;
}(React.Component));
exports.MyComponent = MyComponent;
//# sourceMappingURL=example.js.map