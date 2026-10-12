import useFetch from "../useFetch";

const { useState, useEffect } = require("react");


function Body(){

    const {Profile,setProfile,numberOfProfile,setnumberOfProfile} = useFetch();

    return(
        <div className="search">
            <input type="text" className="input" placeholder="search here" value={numberOfProfile} onChange={(e)=>setnumberOfProfile(e.target.value)}></input>
            <button className="btn" onClick={()=>getProfile(Number(numberOfProfile))}>Search Profile</button>


            <div className="profiles">
                {
                    Profile.map((value)=>{
                        return( <div key={value.id} className="cards">
                            <img src={value.avatar_url}></img>
                            <h3>{value.login}</h3>
                            <a href={value.html_url} target="_blank">Profile</a>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


export default Body;

// Try catch block add kro
// UseCallback() ko use krne ki koshish karo
// ek aur search btn: Name ke basis pe:user profile exist, display the profile otherwise display user not found