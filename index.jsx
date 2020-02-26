import "@babel/polyfill";
import spectre       from './lib/css-spectre/index.jsx';
import customFont    from './lib/css-customFont/index.jsx';
import icons         from './lib/css-icons/index.jsx';
import ReactResume   from './lib/react-resume/index.jsx';
import ReactDOM      from 'react-dom';
import React         from 'react';

var div = document.createElement('div');
document.body.appendChild(div); 
ReactDOM.render(<ReactResume/>, div);