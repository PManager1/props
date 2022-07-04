import React from 'react';
import ReactDOM from 'react-dom';


import GridComponent from './Grid'; 

import Graph from './Graph'; 

import DiscreteSlider from './Change'; 



ReactDOM.render(
  <React.StrictMode>
    <GridComponent />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
