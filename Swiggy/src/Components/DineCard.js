
export default function DineCard({RestData}){

    return(
        
        <div className="max-w-2xs flex-none">
            <a href={RestData.cta.link} target="_blank">
            <div className="relative">
                <img className="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+RestData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-2 left-4 font-bold text-2xl text-white">{RestData?.info?.name}</p> 
                <p className="absolute bottom-2 right-4 font-bold text-2xl text-white">{RestData?.info?.rating?.value}</p> 
                <div className="absolute bg-gradient-to-t from-black h-15 bottom-0 left-0 right-0"></div>
           </div>
           </a>
    
        </div>

    )
}