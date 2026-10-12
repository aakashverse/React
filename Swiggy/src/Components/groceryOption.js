import { groceryGridCards } from "../utils/Groceries";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){

    return(
        <>
            <div className="w-[80%] container mx-auto mt-20">
                <h1 className="text-2xl font-bold">Shop groceries on instamart</h1>
                <div className="container mx-auto flex flex-nowrap overflow-x-auto  gap-5">
                {
                    groceryGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                }
                </div>
        
            </div>
        </>
    )
}