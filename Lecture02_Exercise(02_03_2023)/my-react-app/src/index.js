import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { useState, createContext, useContext ,useRef } from "react";
import reportWebVitals from "./reportWebVitals";
import { Component } from "react";
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
    if (count !== 0) {
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

const root = ReactDOM.createRoot(document.getElementById("show"));
root.render(<App />);

// JSX:

const jsx = <p>JSX</p>;

const myJSX = ReactDOM.createRoot(document.getElementById("showJSX"));
myJSX.render(jsx);

const list = (
  <ul>
    <li>minh</li>
    <li>Viet</li>
    <li>Trung</li>
  </ul>
);

const myList = ReactDOM.createRoot(document.getElementById("showList"));
myList.render(list);

const inputField = <input type="text" />;

const myInputField = ReactDOM.createRoot(document.getElementById("input"));
myInputField.render(inputField);

const x = 50;

const result = <p>{x < 10 ? "hello" : "bye"}</p>;

const myResult = ReactDOM.createRoot(document.getElementById("greet"));

myResult.render(result);

// Component

const a = 1;
const b = 5;

function Calculator() {
  return <p>{a + b}</p>;
}

const myCalculator = ReactDOM.createRoot(document.getElementById("calculator"));
myCalculator.render(<Calculator />);

//Props

function Age(props) {
  return <p> Minh is {props.age} years old</p>;
}

const myAge = ReactDOM.createRoot(document.getElementById("showAge"));
myAge.render(<Age age="21" />);

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

function FavoriteColor() {
  const [color, setColor] = useState("Black");

  return (
    <>
      <h1> My Favorite color is {color}</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("white")}>
        white
      </button>
    </>
  );
}

const myColor = ReactDOM.createRoot(document.getElementById("setColor"));
myColor.render(<FavoriteColor />);

function User() {
  const [name, setName] = useState("Minh");
  const [age, setAge] = useState("21");
  const [address, setAddress] = useState("HN");

  return (
    <>
      <h1>
        {name} is {age} from {address}
      </h1>
    </>
  );
}

const myUser = ReactDOM.createRoot(document.getElementById("showUser"));
myUser.render(<User />);

function Car() {
  const [car, setCar] = useState({
    brand: "BMW",
    years: "2023",
    color: "red",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>
        {car.brand} is {car.color} from {car.years}
      </h1>

      <button type="button" onClick={updateColor}>
        White
      </button>
    </>
  );
}

const myCar = ReactDOM.createRoot(document.getElementById("showCar"));
myCar.render(<Car />);

// UseEffect
//option 1
function TimerOption1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count < 6) {
        setCount((count) => count + 1);
      }
    }, 1000);
  });
  return <p>Times : {count}</p>;
}

const myTime = ReactDOM.createRoot(document.getElementById("timeCounting"));
myTime.render(<TimerOption1 />);

//option 2:Clean up the timer 

//What do you need to add to the second
//argument of a useEffect Hook to limit it to running only on the first render?(use: [])

function TimerOption2(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() =>{
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  },[]);
  
  return <p> Time: {count}</p>
}
const myTimeOption2 = ReactDOM.createRoot(document.getElementById('option2'));
myTimeOption2.render(<TimerOption2/>)


// UseEffect(An empty array)

function UseEmptyArray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 6) {
        setCount((count) => count + 1);
      }
    }, 1000);
  }, []); //add empty brackets here
  return <p> I've render {count} time!</p>;
}

const myUseEffectWithEmptyArray = ReactDOM.createRoot(
  document.getElementById("emptyArray")
);
myUseEffectWithEmptyArray.render(<UseEmptyArray />);

// Here is an example of a useEffect Hook that is dependent on a variable. If the count
//  variable updates, the effect will run again:

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); //add count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const effect = ReactDOM.createRoot(document.getElementById('effect'));
effect.render(<Counter/>);


// useContext
//option 1

function Component1(){
  const [user,setUser] = useState("Minh");

  return (
    <>
      <p>{`hello ${user}`}</p>
      <Component2 user={user}/>
    </>
  );
}

function Component2({user}){
  return (
    <>
    <p>Component 2</p>
    <Component3 user={user}/>
    </>
  )
}

function Component3({user}){
  return (
    <>
    <p>Component 3</p>
    <Component4 user={user}/>
    </>
  )
}

function Component4({user}){
  return(
    <>
    <p>Component 4</p>
    </>
  )
}

const myComponent = ReactDOM.createRoot(document.getElementById('showComponent'));
myComponent.render(<Component1/>)

// Option 2

const UserContext = createContext();

function ComponentTime1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <ComponentTime2 />
    </UserContext.Provider>
  );
}

function ComponentTime2() {
  return (
    <>
      <h1>Component 2</h1>
      <ComponentTime3 />
    </>
  );
}

function ComponentTime3() {
  return (
    <>
      <h1>Component 3</h1>
      <ComponentTime4 />
    </>
  );
}

function ComponentTime4() {
  return (
    <>
      <h1>Component 4</h1>
      <ComponentTime5 />
    </>
  );
}

function ComponentTime5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const myComponentOption2 = ReactDOM.createRoot(document.getElementById('showOption2'))
myComponentOption2.render(<ComponentTime1/>)


// useRef

function UseRef(){
  const [inputValue,setInputValue] = useState("")
  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1;
    //It's like doing this: const count = {current: 0}. 
    //We can access the count by using count.current.
  });

  return (
    <>
    <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />

    <p> Render Count : {count.current} </p>
    </>
  )
}

const myUseRef = ReactDOM.createRoot(document.getElementById('useRef'))
myUseRef.render(<UseRef/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
