import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>
//what to come inside {}:-
//JSX: JS Expression: Output laake de (Result produce kre like string,number,array)
//JSX: Statement (nhi likh sakte)

//props --> object
/*seems like
const props = {
    name : "Aakash",
    age : "20"
};*/

function Greet(props){
    return <h2>Hello ji {props.name} {props.age} </h2>
};
const element2 = <Greet/> //first letter is capital to differentiate between html tags & user defined function call ..it is the rule of JSX
// <Greet/> :Function call
const element3 = <Greet name="Aakash" age="20"/> // name & age act as props

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element3);