import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Details from "./Details";
import Hello from "./Hello";
import Hi from "./Hi";
import Zero from "./Zero";
import Github from "./Github";

function App(){

    return(
        <BrowserRouter>
        <nav className="nav">
            <Link to="/" className="btn">Home</Link>
            <Link to="/Contact" className="btn">Contact</Link>
            <Link to="/Dashboard" className="btn">Dashboard</Link>
            <Link to="/Details" className="btn">Details</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details/>}>
            <Route index element={<Zero/>}></Route>
            <Route path="Hello" element={<Hello/>}></Route>
            <Route path="Hi" element={<Hi/>}></Route>
            </Route>
            <Route path="/Github/:name" element={<Github/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App/>);