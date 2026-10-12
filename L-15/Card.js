import useState from "react";
import FoodCart from "./FoodCart";


const foodItems = [
    {id:1, food:"Pizza", Price:"200"},
    {id:2, food:"Pasta", Price:"300"},
    {id:3, food:"Burger", Price:"500"},
    {id:4, food:"Momos", Price:"150"},
    {id:5, food:"Samose", Price:"120"},
    {id:6, food:"Chicken", Price:"1500"},
    {id:7, food:"Poha", Price:"200"},
    {id:8, food:"Daal", Price:"100"},
    {id:9, food:"Rice", Price:"200"},
];



export default function Card(){
    
    
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )
}