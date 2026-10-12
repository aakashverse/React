import { useState,useContext } from "react";
import GlobalContext from "./Global";


export default function Increment({counts,setCounts}){
    

    return (
        <>
        <h2>Child Counter is: {GlobalContext} {counts} </h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        </>
    )
}