import { useState,useEffect } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";
import { Link} from "react-router";

export default function RestaurantMenu(){
    let {id}=useParams();
    const [RestData,setRestData]=useState([]);
    const [selected,setSelected] = useState(null);

        useEffect(()=>{
        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.315&lng=83.0058&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData?.filter((items)=>'title' in items?.card?.card);
            setRestData(filterData);
        }

        fetchData();

    },[])
    console.log(RestData);

    return(
        <div className="w-[80%] mt-10 mb-10 mx-auto">
            <div className="text-center w-full bg-gray-300 rounded-xl">
                <Link to={`/city/delhi/${id}/search`}>
                <button className="text-xl p-4">Search for dishes</button>
                </Link>
            </div>
        <div>
            <div className="w-[80%] mt-10 mb-10 mx-auto">
            <button className={`text-xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'?"bg-green-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-xl py-2 px-4 border rounded-2xl ${selected==='nonveg'?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
            </div>

            <div className="w-[80%] mx-auto">
            {
                RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            }
            </div>
        </div>
        </div>
    )
}