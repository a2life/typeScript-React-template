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
const searchParamString = location.search;   // check if URLSearchPrams work
const searchParam=new URLSearchParams(searchParamString);

console.log('array.prototype.includes supported ',"this is a pen".includes('pen'));  //check if array.includes work
console.log('urlparams supported:');
for (const [key,value] of searchParam){
    console.log('key:',key,' value:',value)
}
function getValue(){
    return Promise.resolve('this is value');
}

getValue().then((p)=>
    {return ReactDom.render(<App value={p}/>, document.getElementById('root'))}

);