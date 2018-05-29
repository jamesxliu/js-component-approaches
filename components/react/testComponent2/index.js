import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestComponent2 from './TestComponent2';

// for init from the DOM in a script tag
export const init = ({componentHeading, componentText, el}) => {
    ReactDOM.render(
        <TestComponent2 initOptions={{componentHeading, componentText}}/>,
        document.getElementById(el)
    )
};

// for importing into another module or entry pt
export default TestComponent2;