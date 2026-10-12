import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "./Global";
import Third from "./third";

export default function Second(){

    //const data = useContext(GlobalContext);
    //console.log(GlobalContext);  //object
    const {count,setCount} = useContext(GlobalContext);
    
    return (
        <>
        <h2>Kaise h aap {count}</h2>
        <Third/>
        </>
    )
}