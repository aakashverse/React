import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./Components/Home";
import Restaurants from "./Components/Restaurants";
import RestaurantMenu from "./Components/RestaurantMenu";
import FoodSearch from "./Components/foodSearch";

function App(){


    return(

        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurants></Restaurants>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<FoodSearch></FoodSearch>}></Route>
        </Routes>
        
        </BrowserRouter>
        
        </>

    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App/>)