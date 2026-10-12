import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { FetchData } from "./slice1";
import CoinCard from "./CoinCard";

export default function CoinCreate(){
    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state)=>state.slice1);

    useEffect(()=>{
        dispatch(FetchData(20));
    },[])

    if(loading){
        return <h1>data is Loading..</h1>
    }
    if(error){
        return <h2>Some error occured</h2>
    }

    return (
        <>
        <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
            {data.map((value)=><CoinCard key={value.id} coin={value}></CoinCard>)}
        </div>
        </>
    )
}