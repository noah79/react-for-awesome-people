import React, { PropTypes } from "react";
import tweenState from "react-tween-state";
import { getStyles } from "../utils/base";
import Transitions from "./transitions";
import radium from "radium";
import { addFragment } from "../actions";

const Slide = React.createClass({
  displayName: "Slide",
  mixins: [tweenState.Mixin, Transitions],
  getDefaultProps() {
    return {
      align: "center center",
      presenterStyle: {},
        maxHeight:600,
        maxWidth:1200
    };
  },
  propTypes: {
    align: PropTypes.string,
    dispatch: PropTypes.func,
    hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    presenterStyle: PropTypes.object,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    margin: PropTypes.number,
    children: PropTypes.node,
    notes: PropTypes.string,
    slideIndex: PropTypes.number,
    lastSlide: PropTypes.number
  },
  contextTypes: {
    styles: PropTypes.object,
    export: PropTypes.bool,
    print: PropTypes.bool,
    overview: PropTypes.bool
  },
  getInitialState() {
    return {
      zoom: 1,
      contentScale: 1
    };
  },
  setZoom() {
    const mobile = window.matchMedia("(max-width: 628px)").matches;
    const content = this.refs.content;
    const zoom = (content.offsetWidth / 1000);
    const contentScaleY = (content.parentNode.offsetHeight / this.props.maxHeight);
    const contentScaleX = (content.parentNode.offsetWidth / this.props.maxWidth);
    const contentScale = mobile ? 1 : Math.min(contentScaleY, contentScaleX);
    this.setState({
      zoom: zoom > 0.6 ? zoom : 0.6,
      contentScale: contentScale < 1 ? contentScale : 1
    });
  },
  componentDidMount() {
    this.setZoom();
    const slide = this.refs.slide;
    const frags = slide.querySelectorAll(".fragment");
    if (frags && frags.length && !this.context.overview) {
      Array.prototype.slice.call(frags, 0).forEach((frag, i) => {
        frag.dataset.fid = i;
        return this.props.dispatch && this.props.dispatch(addFragment({
          slide: this.props.hash,
          id: i,
          visible: this.props.lastSlide > this.props.slideIndex
        }));
      });
    }
    window.addEventListener("load", this.setZoom);
    window.addEventListener("resize", this.setZoom);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.setZoom);
  },
  render() {
    const { align, presenterStyle, children } = this.props;
    const printStyles = this.context.print ? {
      backgroundColor: "white",
      backgroundImage: "none"
    } : {};
    const overViewStyles = {
      inner: {
        flexDirection: "column"
      },
      content: {
        width: "100%"
      }
    };
    const styles = {
      outer: {
        position: this.context.export ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: this.context.styles.global.body.background ?
          this.context.styles.global.body.background : ""
      },
      inner: {
        display: "flex",
        position: "relative",
        flex: 1,
        //alignItems: align ? align.split(" ")[1] : "center",
        justifyContent: align ? align.split(" ")[0] : "center"
      },
      content: {
        flex: 1,
        maxHeight: this.props.maxHeight,
        maxWidth: this.props.maxWidth,
        fontSize: 16 * this.state.zoom,
        //transform: `scale(${this.state.contentScale})`,
        padding: this.state.zoom > 0.6 ? this.props.margin || 20 : 10
      }
    };
    return (
      <div className="spectacle-slide"
        ref="slide"
        style={[
          styles.outer,
          getStyles.call(this),
          this.getTransitionStyles(),
          printStyles,
          presenterStyle
        ]}
      >
        <div style={[styles.inner, this.context.overview && overViewStyles.inner]}>
          <div ref="content"
            className="spectacle-content"
            style={[
              styles.content,
              this.context.styles.components.content,
              this.context.overview && overViewStyles.content
            ]}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
});

export default radium(Slide);
