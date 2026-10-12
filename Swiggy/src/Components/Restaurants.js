import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurants(){
    const [RestData,setRestData] = useState([])

        useEffect(()=>{
            async function fetchData(){
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.315&lng=83.0058&is-seo-homepage-enabled=true"
                const response = await fetch(proxyServer+swiggyAPI);
                const data = await response.json();
//https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.315&lng=83.0058&restaurantId=435680&submitAction=ENTER
                setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }

            fetchData();

        },[])
        //console.log(RestData)
        
        //shimmer effect
        if(RestData.length==0){
            return <Shimmer></Shimmer>
        }

        return(

            <div className="w-[80%] flex flex-wrap mx-auto mt-20 gap-3 ">
                {
                    RestData?.map((RestInfo)=><RestCard key={RestInfo.info.id} RestInfo={RestInfo}></RestCard>)
                }

            </div>
        )
        
    }
//proxy-server: https://cors-anywhere.herokuapp.com/