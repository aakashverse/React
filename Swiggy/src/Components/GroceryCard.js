
export default function GroceryCard({foodData}){

    return(
       
        <>
        <div>
        <a href={foodData?.action?.link}>
        <img className="min-w-36 min-h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h2 className="items-center">{foodData.action.text}</h2>
        </div>
        </>
        

    )
}