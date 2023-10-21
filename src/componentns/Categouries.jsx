import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
const [allCategories,setAllCategories]=useState(null)
useEffect(()=>{
    fetch("https://assaignment-ten-server-jc3bxq511-md-ebrahim-khalils-projects.vercel.app/products")
    .then(res => res.json())
    .then(data =>setAllCategories(data))
    },[])
    console.log(allCategories);
    return (
       <div>
       <div className="text-center text-3xl space-y-4">
       <h1 className="text-5xl font-bold text-green-500">Our Brands</h1>
       <h3 className="text-red-400 font-semibold">Chose As Your Phones And Enjoy Your Life</h3>
       </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {
              allCategories?.map((item,i)=><Category key={i} item={item}></Category>)
          }
      </div>
       </div>
    );
};

export default Categories;