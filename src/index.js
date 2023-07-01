import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AgeCalculator from './componets/other/AgeCalculator';
//import Bmi from './componets/Bmi';

ReactDOM.render(
  <React.StrictMode>
    <AgeCalculator/>
 {/* <App/> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);
