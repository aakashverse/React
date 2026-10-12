import React,{useState} from "react";
import ReactDOM from "react-dom/client";

//useState()

function Counter(){
    let [count,SetCount] = useState(0); //initialized using useState ,returns an array
    function incrementNumber(){
        //count=count+1;
        SetCount(count+1);
        console.log("count is:",count);
        //document.querySelector('h1').innerText=`count is ${count}`;
    }

    function decrementNumber(){
        //count=count-1;
        SetCount(count-1);
        console.log("count is:",count);
        //document.querySelector('h1').innerText=`count is ${count}`;
    }

    return(
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={incrementNumber}>Increment {count}</button>
            <button onClick={decrementNumber}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);