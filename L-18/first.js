import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./vote";



function App(){
    const [Language,setLanguage] = useState(["TS","JS","Java"])

    const VDom = <h1>Hello Akash</h1>
    const RDom = document.createElement('h1');
    RDom.innerText='Hello Akash';

    console.log(VDom);  // virtual DOM --> Lightweight copy of RealDOM
    console.dir(RDom);  // Real DOM --> Heavy weight

    function handleClick(){
        setLanguage(["C++",...Language])
    }



    return (
        <>
        <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"50px"}}>
            {
                Language.map((value,index) => <Add key={index} value={value}></Add>)
            }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Add Language</button>

        </>


    )
}











ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

