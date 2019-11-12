import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export const init = (el) => {
    ReactDOM.render(<App />, document.getElementById(el));
};

export default App;
