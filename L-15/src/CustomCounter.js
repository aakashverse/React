import {useState,useDispatch} from "react";
import { Decrement,Increment,CustomCounter} from "./slice1"

export default function CustomCounter(){
    const [number,setNumber] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(customIncreaser(Number(number)));
        setNumber("");
    }
     
    return(
        <>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={handleClick()}>Submit</button>
        </>
    )
}