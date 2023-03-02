import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {useState} from "react";
import reportWebVitals from './reportWebVitals';
import {Component} from 'react';  

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
    if(count !== 0){
      setCount(count - 1);
    }
};
  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('show'));
root.render(<App />);



// JSX:

const jsx = <p>JSX</p>

const myJSX = ReactDOM.createRoot(document.getElementById('showJSX'));
myJSX.render(jsx);



const list = <ul>
  <li>minh</li>
  <li>Viet</li>
  <li>Trung</li>
</ul>

const myList = ReactDOM.createRoot(document.getElementById('showList'));
myList.render(list);


const inputField = <input type="text" />

const myInputField = ReactDOM.createRoot(document.getElementById('input'));
myInputField.render(inputField);


const x = 50;

const result = <p>{(x) < 10 ? "hello" : "bye"}</p>

const myResult = ReactDOM.createRoot(document.getElementById('greet'));

myResult.render(result);

// Component

const a = 1;
const b = 5;

function Calculator(){
  return <p>{a + b}</p>
}

const myCalculator = ReactDOM.createRoot(document.getElementById('calculator'));
myCalculator.render(<Calculator/>)

//Props

function Age(props){
  return <p> Minh is {props.age} years old</p>
}

const myAge = ReactDOM.createRoot(document.getElementById('showAge'));
myAge.render(<Age age="21"/>)

//Lifecycle method



// class Component{
//   constructor(props){
//     this.props = props;
//   }
// }

// class Button extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {busy : true};
//   }
// };


// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data:'www.javatpoint.com'
//     }
//     this.handleEvent = this.handleEvent.bind(this);
//   }

//   handleEvent(){
//     console.log(this.props);
//   }
//   render(){
//     return(
//       <div className='App'>
//         <h2> React constructor example</h2>
//         <input type="text" value={this.state.data}/>
//         <button onclick={this.handleEvent}>Please click</button>

//       </div>
//     );
//   }
// }


//React a Hook

function FavoriteColor(){
  const [color, setColor] = useState("Black");

  return(
    <>
    <h1> My Favorite color is {color}</h1>
    <button
    type="button"
    onClick = {() => setColor("blue")}
    >Blue</button>
    <button
    type='button'
    onClick={()=> setColor("red")}
    >Red</button>
    <button
    type='button'
    onClick={() => setColor("pink")}
    >Pink</button>
    <button
    type='button'
    onClick={() => setColor('white')}
    >white</button>    
    </>
  )
}

const myColor = ReactDOM.createRoot(document.getElementById('setColor'));
myColor.render(<FavoriteColor/>)



function User(){
  const [name,setName] = useState("Minh");
  const [age, setAge] = useState("21");
  const [address, setAddress] = useState("HN");

  return(
    <>
    <h1>{name} is {age} from {address}</h1>
    </>
  )
}

const myUser = ReactDOM.createRoot(document.getElementById('showUser'));
myUser.render(<User/>)


function Car(){
  const [car, setCar] = useState({
    brand : "BMW",
    years : "2023",
    color : "red"

  });
  const updateColor = ()=>{
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
    <h1>{car.brand} is {car.color} from {car.years}</h1>

    <button type='button' onClick={updateColor}>White</button>
    
    </>
  )
}

const myCar = ReactDOM.createRoot(document.getElementById('showCar'));
myCar.render(<Car/>)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
