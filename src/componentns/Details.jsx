import { useLoaderData } from "react-router-dom";

const Details = () => {
    const loadedData =useLoaderData()
    console.log(loadedData);
    const {name,brand,type,description,price,rating,_id,image
    }=loadedData||{}

const handelAddCart =()=>{
      fetch("https://assaignment-ten-server-2m95fvaym-md-ebrahim-khalils-projects.vercel.app/carts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loadedData)
         }) 
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           
        })

}

    return (
        <div>
           <div className="flex ">
<div className="w-3/4">
<img className="w-full" src={image} alt="" />
</div>
<div className="w-1/4 flex flex-col justify-center items-center ">
<div className="h-1/2  space-y-5 ">
<h1 className=" text-3xl font-bold">Name: {name}</h1>
<h1 className=" text-3xl font-bold">Price: {price}$</h1>
<h1 className=" text-3xl font-bold">Brand: {brand}</h1>
<button onClick={handelAddCart} className="btn btn-accent">Add To Cart</button>
</div>
<div className="h-1/2">
<img className="w-full h-full" src={image} alt="" /> 
</div>
</div>
 </div> 

<div className="space-y-5 mt-10">
<h1 className="text-3xl font-bold">Type: {type}</h1>
<h3  className="text-3xl font-bold">Rating: {rating}</h3>
<p  className="text-3xl font-bold">Description: {description}</p>
</div>

        </div>
    );
};

export default Details;