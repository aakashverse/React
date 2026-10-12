import { useParams } from "react-router"
import { useState,useEffect } from "react";

export default function FoodSearch(){
    const {id} = useParams();
    const [food,setFood] = useState("");
    const [RestData,setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl/search?lat=25.315&lng=83.0058&restaurantId=${id}&isMenuUx4=true&query=${food}&submitAction=ENTER`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            // const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            // const filterData = tempData?.filter((items)=>'title' in items?.card?.card);
            console.log(data)
            setRestData(data);
        }
        
        if(food.length>1){
            fetchData();
        }
        
    },[food])
       

    return(

        <div className="w-[80%] mt-10 mb-10 mx-auto">
            <input className="pl-10 text-xl py-4 w-full bg-gray-300 rounded-xl" type="text" placeholder="search dishes" onChange={(e)=>{setFood(e.target.value)}}></input>
        </div>
       
    )
}