import React,{ useState ,useEffect } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Colorful from "./Components/Colorful";

//re-render = call the function again
function Main(){    
    let [count,setCount]=useState(0);
    return (
        <>
        <div className="counter">
            <h1>counter is: {count}</h1>
            <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>+</button>
        </div>
        <Colorful/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);