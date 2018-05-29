import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

export const init = ({componentHeading, componentText, el}) => {
    ReactDOM.render(
        <TestComponent initOptions={{componentHeading, componentText}}/>,
        document.getElementById(el)
    )
};
