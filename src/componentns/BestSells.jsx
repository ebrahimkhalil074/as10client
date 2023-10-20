import { useEffect, useState } from "react";
import BestSellsItem from "./BestSellsItem";
import Marquee from "react-fast-marquee";
const BestSells = () => {
const [data,setData] =useState([])

useEffect(()=>{
fetch("data.json")
.then(res => res.json())
.then(data =>setData(data))
},[])
console.log(data);
    return (
      
         <div className="">
            <h1 className="text-4xl py-8">Popular <span className="text-red-600 text-6xl">&</span> Best Sells</h1>
        <Marquee>
        <div className="flex gap-5">
           {
            data?.map((item,i) =><BestSellsItem key={i}item={item}></BestSellsItem>)
           } 
        </div>
        </Marquee>
        </div>
      
    );
};

export default BestSells;