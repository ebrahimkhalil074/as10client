import { useLoaderData, } from "react-router-dom";


const Update = () => {
const y = useLoaderData()
console.log(y);
const {name, brand,type,description,price,rating,image,_id} =y ||{}
    const handelUpdate =(e)=>{
        e.preventDefault()
        const form =e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const image = form.image.value
        
         const updateProduct ={name, brand,type,description,price,rating,image}
       
         fetch(`http://localhost:3000/brands/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateProduct)
         }) 
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           
        })
        //  fetch("http://localhost:3000/brands",{
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(brands)
        //  }) 
        // .then(res => res.json())
        // .then(data =>{
        //    console.log(data);
        //     form.reset()
        // })
        
        }

    return (
        <div>
        <div>
            <h1 className="text-center p-11 text-5xl font-semibold"> Update New Product</h1>
            <form onSubmit={handelUpdate} className="space-y-4">
            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered input-error w-full  block" />
            <input type="text" defaultValue={brand} name="brand" placeholder="Brand Name" className="input input-bordered input-error w-full  block" />
        <input type="text" name="type"  defaultValue={type} placeholder="Type" className="input input-bordered input-error w-full " />
        <input type="text" defaultValue={description} name="description" placeholder="Short description" className="input input-bordered input-error w-full " />
        <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered input-error w-full " />
        <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered input-error w-full " />
        <input type="text" defaultValue={image} name="image" placeholder="Image" className="input input-bordered input-error w-full " />
        
        <input type="submit" className="items-end" value="Update" />
        
            </form>
        </div>
                </div>
    );
};

export default Update;