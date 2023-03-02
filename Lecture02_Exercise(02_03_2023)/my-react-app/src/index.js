import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {useState} from "react";
import reportWebVitals from './reportWebVitals';

import Todos from './name'; 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



const App = () => {
  const [count, setCount] = useState(1);


  const increment = () => {
      setCount(count + 1);
    
  };
  const decrement = () => {
    // if (count !== 0) {
      setCount(count - 1);
    // }
};
  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>

      {/* <div>
        Count Two: {count}
        <button onclick={decrement}> - </button>
      </div> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('show'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
