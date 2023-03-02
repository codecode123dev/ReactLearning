import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentFiles from './componentFiles';
import { useState } from "react";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// code
// const myFirstElement = <h1>Hello React!</h1>

// root.render(myFirstElement);

//React Render HTML

// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );
  
//   ReactDOM.render(myelement, document.getElementById('root'));
//   ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);

// Coding JSX

const useJSX = <p>JSX</p>;

const jsx = ReactDOM.createRoot(document.getElementById('useJSX'));
jsx.render(useJSX)


//don't use JSX
const dontUse = React.createElement('p',{},'Dont use reactjs');
const dont = ReactDOM.createRoot(document.getElementById('dontUseJSX'));
dont.render(dontUse)

// execute the expression
const executeTheExpression = <p>Total(5 + 5) = {5 + 5}</p>
const result =  ReactDOM.createRoot(document.getElementById('executeTheExpression'));
result.render(executeTheExpression);

//Insert a large block of HTML

const createList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Coconut</li>
    <li>Cherries</li>
  </ul>
);

const fruits = ReactDOM.createRoot(document.getElementById('fruits'))
fruits.render(createList);

//wrap two paragraphs inside on DIV element

const wrap = (
  <div>
    <p>ABC</p>
    <p>ABC</p>
  </div>
);

const wrapParagraphs = ReactDOM.createRoot(document.getElementById('wrap'));
wrapParagraphs.render(wrap);


const fragment = (
  <>
    <p>fragment</p>
    <p>fragment</p>
  </>
);

const useFragment = ReactDOM.createRoot(document.getElementById('useFragment'));
useFragment.render(fragment)

// attribute ClassName instead of class in JSX

const exClassName = <h1 className='className'>Hello</h1>
const useClassName = ReactDOM.createRoot(document.getElementById('className'))
useClassName.render(exClassName)

//conditions if statement

const x = 8;
let greet = "Good Bye";

if(x < 10){
  greet = "Hello";
}

const conditions = <p>{greet}</p>

const myConditions = ReactDOM.createRoot(document.getElementById('conditions'))
myConditions.render(conditions)


//use ternary expressions:

const y = 5;

const useTernary = <p>{y < 10 ? "Hellooo" : "Bye"}</p>;

const myTernary = ReactDOM.createRoot(document.getElementById('useTernary'));
myTernary.render(useTernary);

// React Class Components

function Car(){
  return <p>Hi everyone</p>

}

const myComponent = ReactDOM.createRoot(document.getElementById('testComponents'));
myComponent.render(<Car/>)


//Props

function Props(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const useColor = ReactDOM.createRoot(document.getElementById('color'));
useColor.render(<Props color="red"/>);

//Component in component

function MotorBike(){
  return <p>MotorBike color is red</p>
}

function MotorColor(){
  return (
  <>
  <p>What is MotorBike color</p>
  <MotorBike/>
  </>
  );
}

const myComponentInComponent = ReactDOM.createRoot(document.getElementById('showComponentInComponent'))
myComponentInComponent.render(<MotorColor/>);

//Component File

const componentFile = ReactDOM.createRoot(document.getElementById('testComponentFile'));
componentFile.render(<ComponentFiles/>)

//Map

const myArrayMap = ['Minh', 'Viet', 'Huy'];

const myListMap = myArrayMap.map((item) => <p>{item}</p>);

const show = ReactDOM.createRoot(document.getElementById('testMap'));

show.render(myListMap);

//React List

function Bike(props){
  return <li>Bike brand is {props.nameBrand}</li>
}

function Brand(){
  const brands = ['Ford','BMW','Mec','Audi','Toyota'];
  return(
    <>
      <p>what is bike brand?</p>
      <ul>
        {brands.map((brand)=> <Bike nameBrand ={brand}/>)}
      </ul>
    </>
  );
}

const showBike = ReactDOM.createRoot(document.getElementById('reactList'));
showBike.render(<Brand/>);




//Let's refactor our previous example to include keys:

function Ship(props){
  return <li>Ship Color is {props.color}</li>
}

function ShipColor(){
  const colors = [
    {id:1, color:'Red'},
    {id:2, color: 'Black'},
    {id:3, color:'Blue'},
    {id:4, color:'Pink'}
  ];
  return(
    <>
      <p>Ship Color</p>
      <ul>
        {colors.map((ship) => <Ship key={ship.id} color={ship.color} />)}
      </ul>
    </>
  );
}

const myShipColor = ReactDOM.createRoot(document.getElementById('keyReactList'));
myShipColor.render(<ShipColor/>)


// React Form

function MyForm(){
  return (
    <form>
      <label>
        <input type="text"/>
      </label>
    </form>
  )
}

const myForm = ReactDOM.createRoot(document.getElementById('showForm'));
myForm.render(<MyForm/>)

// Handling form

function MyHandlingForm(){
  const [name, setName] = useState("");
  return (
    <form>
      <label>Enter your name:
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>

  )
}

const myHandlingForm = ReactDOM.createRoot(document.getElementById('handlingForm'));
myHandlingForm.render(<MyHandlingForm/>)

// PreventDefault

document.getElementById("myCheckbox").addEventListener("click",function(event){
  event.preventDefault()
});

// Add a submit button and an event handler in the onSubmit attribute:

function MyFormUseOnSubmit(){
  const [name,setName] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Name is : ${name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Enter your Name:
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}
const myFormUseOnSubmit = ReactDOM.createRoot(document.getElementById('useOnSubmit'));
myFormUseOnSubmit.render(<MyFormUseOnSubmit/>)

// //Multiple Input Fields

// function MyMultipleInputFields(){
//   const [inputs,setInputs] = useState({});
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     setInputs(values => ({...values , [name] : value}))
//   }

//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     alert(inputs);
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//         type="text"
//         name="username"
//         value={inputs.username || ""}
//         onChange={handleChange}
//         />
//       </label>
//       <label>
//         <input
//         type="number"
//         name="age"
//         value={inputs.age ||""}
//         onChange={handleChange}
//         />
//       </label>
//       <input type="submit"/>
//     </form>
//   )
// }

// const multipleInputFields = ReactDOM.createRoot(document.getElementById('multipleInputFields'))
// multipleInputFields.render(<MyMultipleInputFields/>)

///////////////////////////////////////

function MyFormMultiple() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const example = ReactDOM.createRoot(document.getElementById('example'));
example.render(<MyFormMultiple />);






//show App.js
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


