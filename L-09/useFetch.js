import {useState,useEffect} from "react";
// custom hook --> useFetch()--> function or logical part can be compiled in one hook & used from here to any other file
export default function useFetch(){

    const [Profile,setProfile] = useState([]);
    const [numberOfProfile,setnumberOfProfile] = useState("");

    async function getProfile(count){
        let ran = Math.floor(1+Math.random()*10000);
     
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);                   
    }

    useEffect(()=>{
      getProfile(10);
    },[])

    return {Profile,setProfile,numberOfProfile,setnumberOfProfile};
}
