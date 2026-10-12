import { Link } from "react-router"
export default function RestCard({RestInfo}){

    return(
        <Link to={"/city/delhi/"+RestInfo?.info?.id}>
        <div className="transform transition duration-200 hover:scale-95">
        <img className="h-45 w-70 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+RestInfo?.info?.cloudinaryImageId}></img>
        <div className="w-68 ml-3 align-center mx-auto mt-3">
        <div className="font-bold text-xl">{RestInfo?.info?.name}</div>
        <div className="flex items-center gap-1">
            <svg
                className="w-6 h-6 fill-green-600"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.59L12 2 8.91 8.65 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{RestInfo?.info?.avgRating}</span>
            <span className="font-semibold"> • {RestInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="">
            <div className="text-gray-600 text-m">{RestInfo?.info?.cuisines.join(" ")}</div>
            <div className="text-gray-600 text-m">{RestInfo?.info?.areaName}</div>
        </div>
        </div>
       
        </div>
        </Link>


    )
}