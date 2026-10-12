import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arr from "./utils/dummy";
// import {greet as goa,meet as roa} from "./utils/dummy" //to rename use 'as' keyword

console.log(arr);


function App(){
    let [A,setA] = useState(arr);

    function sortArray(){
        A.sort((a,b) => a.Price-b.Price);
        setA([...A]);   
        //console.log(arr);
    }

    function priceAbove499(){
        const B = arr.filter((value)=>value.Price>499);
        setA(B);
    }

    return (
    <>
    {/* header */}
    <Header/> 
    <button onClick={sortArray} className="sbtn" >Sort by Price</button>
    <button onClick={priceAbove499} className="sbtn" >Price above 499</button>
    {/*Body */}
    <div className="middle" style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
        {/* <Card cloth="Ethnic Wear" offer="50-80 %OFF"/>
        <Card cloth="Casual Wear" offer="30-50 %OFF"/>
        <Card cloth="Men's Active Wear" offer="20-40 %OFF"/>
        <Card cloth="Women's Active Wear" offer="50-60 %OFF"/>
        <Card cloth="Kurta" offer="20-40 %OFF"/>
        <Card cloth="Pajamas" offer="50-90 %OFF"/>
        <Card cloth="Jeans" offer="60-50 %OFF"/>
        <Card cloth="Western Wear" offer="10-30 %OFF"/>
        <Card cloth="Sports Wear" offer="40-30 %OFF"/> */}

        {
            A.map((value,index)=> <Card cloth={value.cloth} offer={value.offer} image={value.img} Price={value.Price}/>) //returns an array
        }
    </div>
    {/*footer */}
    <Footer/>
    </>
    )   
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);