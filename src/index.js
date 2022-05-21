import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();



// function Router(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App/>}/>
//       <Route path="register" element={<Form/>}/>
//       <Route path="about" element={<About/>}></Route>
//     </Routes>
//   </BrowserRouter>
//   )
// }

// ReactDOM.render(
//   Router(), document.getElementById('root')
// )



