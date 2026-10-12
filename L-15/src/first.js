import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./counting";
import CustomCounter from "./CustomCounter";

function App(){

    return(
        <Provider store={stores}>
        </Provider>
    );
}





ReactDOM.createRoot(document.getElementById('root')).render(<App/>);