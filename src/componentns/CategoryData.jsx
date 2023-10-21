import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import Product from "./Product";

const CategoryData = () => {
    
const loaderData= useLoaderData()

const {brand} =useParams()
console.log(loaderData,brand);
const filterData =loaderData.filter(item => item.brand == brand)
console.log(filterData);

    return (
        <div>
         <Slider img={filterData[0].image}img1={filterData[1].image} img2={filterData[2].image}img3={filterData[3].image} 
         img4={filterData[0].image}img5={filterData[2].image}
         ></Slider>
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
        {
            filterData.map((product,i)=><Product key={i} product={product}
           
            ></Product>)
        }
       </div>
        </div>
    );
};

export default CategoryData;