import React, { useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import GlobalContext from "./Global.js";
import Second from "./second.js";

function App(){
    
    const [count,setCount] = useContext(10);

    return (
        <>
        <GlobalContext.Provider value={{count,setCount}}>
        <h1>Hello baby Aakash {count}</h1>
        <Second/>
        </GlobalContext.Provider>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// First Create a Context
// Provide data ko uske andar: Descendent
// Consume the context