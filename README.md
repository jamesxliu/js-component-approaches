# Overview
Example of how to bundle up ReactJS and VueJS components into UMD bundles which can be loaded with script tags
and subsequently initialized with a module method call.

Also demonstrates conversion of CommonJS-style NPM modules into UMD bundles (npm `namor` & `jQuery`) so that they can function
as dependencies of ES6 modules loaded via native browser imports in the case of the jQuery component example.

For the React & Vue components, also demonstrates CSS modules implementation.

## Running
1. Install yarn `brew install yarn`
2. Pull down NPM modules `yarn install`
3. Run NPM start script `yarn run start`

Access via `localhost:3100`.