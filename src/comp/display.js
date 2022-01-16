import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContentDisp from "./ContentDisp";
const Display=()=>{
    const [Data, setData] = useState([])
    const getdata=async ()=>{
        const tempdata=await fetch("https://freecurrencyapi.net/api/v2/latest?apikey=e8466ed0-76bd-11ec-bac4-31da9fe792d2&base_currency=INR")
        const jsondata=await tempdata.json()
        const entries=Object.entries(jsondata.data)
        console.log(entries,"hello")
        setData(entries)
    }
    //setInterval(getdata,300000)
    useEffect(() => {
        getdata()
    }, [])


    return(
    <div className="display">
        <h1>Current Rates</h1>
        <section className="ratedis">
            <div>
                {Data && Data.map((data)=>(
                    <ContentDisp data={data}/>
                ))}
            </div>
        </section>
    </div>
    )
}

export default Display