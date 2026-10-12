import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

//useMemo hook
//1. counter btn
//2. Input field
// 0 1 1 2 3 5 8 13 21
// Recursive code
// Time Complexity: 2^n

const fibonacci =(n)=>{   //from useCallback also, done by without using callback
    if(n<=1)
    return n;

    return fibonacci(n-1)+fibonacci(n-2);
};

const Fibonacci = useCallback((n)=>{
    return fibonacci(n);
},[]);


function App(){
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState("")
    const [result,setResult] = useState("");

    //const result = useMemo(()=>Fibonacci(number),[number]);
    useEffect(()=>{
        setResult(Fibonacci(number));
    },[number]);

    return (
        <>
        <h2>Count is: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        
        <div className="content">
            <h2>Fibonacci Number is: {result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
        </>
    )
}














ReactDOM.createRoot(document.getElementById('root')).render(<App/>);