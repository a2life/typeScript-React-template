// @ts-ignore
import React from 'react';
import ReactDom from 'react-dom'


// import 'core-js/features/array/includes';
// import 'core-js/features/array/find'
//  import "core-js/features/Promise";
//  import "core-js/features/url";
import "core-js/stable";
import "regenerator-runtime/runtime";
// above two imports to provide compatibility with older browsers (IE 11)
import App from './components/App'

ReactDom.render(<App />, document.getElementById('root'));