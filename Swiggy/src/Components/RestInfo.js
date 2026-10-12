
export default function RestInfo({restData}){

    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
        <p className="text-xl text-gray-700 font-bold mb-1">{restData?.name}</p>
        <p className="text-xl">{"₹"+("defaultPrice" in restData? restData.defaultPrice/100:restData.price/100)}</p>
        <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
        <p>{restData?.description}</p>
        </div>

        <div className="w-[20%] relative">
            <img className="h-36 w-full object-cover mt-3 rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
            <button className="absolute left-20 bottom-1 text-2xl rounded-xl text-green-500 px-4 py-2 bg-white shadow-md border border-white">Add</button>
        </div>
    
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
        
        
    )
}