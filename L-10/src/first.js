import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client"

//useRef

function StopWatch(){

    const [time,setTime] = useState(0);
    const [isRunning,SetIsRunning] = useState(false);
    const IntervalRef = useRef(null);

    function start(){
        if(!isRunning){
            IntervalRef.current = setInterval(()=>{
                setTime(prevTime=>prevTime+1);
                //console.log(time);
            },1000);
            SetIsRunning(true);
        }
    }


    function stop(){
        if(isRunning){
            clearInterval(IntervalRef.current);
            IntervalRef.current = null;
            SetIsRunning(false);
        }
    }

    function reset(){
        clearInterval(IntervalRef.current);
        IntervalRef.current = null;
        setTime(0);
    }

    return(
        <>
        <h1>StopWatch is:{time}</h1>
        <button onClick={start}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        </>
    )

}














ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>);