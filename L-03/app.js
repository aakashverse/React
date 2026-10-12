import React from "react";
import ReactDOM from "react-dom/client";

//const element = React.createElement('h1',{id:"first",className:"aakash",style:{{backgroundColor:"black",fontSize:"20px"}},'Hello coder aakash');

const name = "Yadav";
const obj1 = {
    age: 20,
    salary: 100000000
}
// style tag expects an object that's why above statement has {{}} one for style tag & another for JSX Or direct {obj2} kardo

const obj2 = {
    backgroundColor:"black",
    color:"red",
    fontSize:"20px"
}

//React element
const newElement = (  //expects single element i.e. can have multiple child but all are combined in One in order to render
    <>
        <h1 id="first" className="second">Hello Coder Aakash {name}</h1>
        <h2 style={{backgroundColor:"black",color:"red"}}>Welcome to Google at {obj1.age}, we're delighted to have talent like you at very young age</h2>
    </>
)
//React Component 
//2. function based component(new-->currently used)
//1. Class based component(old)

function greet(){
    return <h1>Akash is the real OG</h1>
}

const meet = () => {
    return <h2>Akash is the G.O.A.T</h2>
}

const newElement2 = greet();
const newElement3 = meet();
const allelement=<>{greet()}{meet()}</> //multiple render 

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(allelement);

//     babel                     React                       Render
//  JSX ==> React.createElement() ==> react element(JS object) ==> HTML element

//JSX: Javascript XML : HTML code direct js me likh sakte hain
//JSX: Js ke expression bhi likh sakte h HTML me