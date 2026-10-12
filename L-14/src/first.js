import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import stores from "./Stores";
import Counting from "./counting";

function App(){

    return(
        <Provider store={stores}>
        <Counting/>
        </Provider>
    )
}











ReactDOM.createRoot(document.getElementById('root')).render(<App/>);