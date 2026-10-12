import React, {useState,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";


function GithubProfile(){
    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);