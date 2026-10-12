import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

//useEffect()

function Colorful(){
    const [color,setColor] = useState("black");
        //useeffect(clallback function,dependency) --> if color changes then only the inside callback function runs & 

        useEffect(()=>{
            document.body.style.backgroundColor = color;
        },[color]); // if dependency array is empty [] so,the code or function written inside useeEffet will only run one time i.e. at starting 

        // useEffect call back function always runs un the last 
        console.log("second");
        
    return (
        <>
        <h1>Background Color Changer</h1>
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>Pink</button>
        </>
    )
}

export default React.memo(Colorful);