import React, { useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment.js";
import Decrement from "./Decrement.js";


function App(){

    const [count,setCount] = useState(10);

    return (
        <>
        <h1>State Lifting {data}</h1>
        <Increment counts={count} setCounts={setCount}/>
        <Decrement counts={count} setCounts={setCount}/>
        </>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<App/>)