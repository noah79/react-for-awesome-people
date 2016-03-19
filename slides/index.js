import React from "react";

import {
    Appear, BlockQuote, Cite, CodePane, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "src";

import preloader from "src/utils/preloader";
import {MyComponent} from '../examples/example.js';


import Interactive from "./interactive.jsx";

const slideTransition = ['spin', 'zoom'];
const images = {
    javascript: require("assets/javascript.jpg"),
    javascript2: require("assets/javascript2.jpg"),
    moduleCounts: require("assets/module_counts.png"),
    jobTitles: require("assets/jobTitles.png"),
    jackie: require("assets/jackie.png"),
    indieBundle: require("assets/indiebundle.png"),
    jquery: require("assets/jquery.png"),
    backbone: require("assets/backbone.png"),
    angular: require("assets/angular.png"),
    ember: require("assets/ember.png"),
    spaghetti: require("assets/spaghetti.jpg"),
    construction: require("assets/construction.jpg"),
};

preloader([images.moduleCounts, images.jobTitles]);

export default class Slides extends React.Component {
    render() {
        return (
            <Spectacle>
                <Deck transition={slideTransition} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Overview
                        </Heading>
                        <Markdown>
                            {`
* Open Source:  https://facebook.github.io/react/
* Created and maintained by Facebook + Instagram
* No Bindings - Virtual DOM (Fast!)
* JSX/TSX - 100% Javascript/Typescript - No templates!
`}
                        </Markdown>
                    </Slide>

                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Why React?
                        </Heading>
                        <Markdown>
                            {`
* Everything is a component.
* Every component has a render() method.
* Every component has props and state.
* Excellent documentation, errors, and warnings
* Hot reloading!`}
                            </Markdown>
                    </Slide>

                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Components
                        </Heading>
                        <CodePane
                            lang="javascript"
                            size={.8}
                            source={require("raw!../examples/example.tsx")}
                            margin="5px auto"/>
                        <MyComponent size={.2} />
                    </Slide>

                    <Slide>
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Component Lifecycle
                        </Heading>
                        <CodePane
                            lang="javascript"
                            size={1}
                            source={require("raw!../examples/example-lifecycle.tsx")}
                            margin="5px auto"/>
                    </Slide>
                    
                    <Slide>
                        <Heading size={1} fit lineHeight={1} textColor="black">
                            Build Ecosystem
                        </Heading>
                        <Markdown>
                            {`
* Module Bundler:  [Webpack](https://webpack.github.io/)
* Build System:  [Gulp](http://gulpjs.com)
* Package Manager:  [NPM](http://npmjs.com)
* PostCSS:  AutoPrefixer + Lint
`}
                        </Markdown>
                    </Slide>

                </Deck>
            </Spectacle>
    );
    }
    }
