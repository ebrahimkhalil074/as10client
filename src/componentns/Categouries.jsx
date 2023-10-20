import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
const [allCategories,setAllCategories]=useState(null)
useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data =>setAllCategories(data))
    },[])
    console.log(allCategories);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
        {
            allCategories?.map((item,i)=><Category key={i} item={item}></Category>)
        }
    </div>
    );
};

export default Categories;