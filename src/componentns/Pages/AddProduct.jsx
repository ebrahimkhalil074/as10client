

const AddProduct = () => {



const handelProduct =(e)=>{
e.preventDefault()
const form =e.target
const name = form.name.value
const brand = form.brand.value
const type = form.type.value
const description = form.description.value
const price = form.price.value
const rating = form.rating.value
const image = form.image.value
 const brands ={name, brand,type,description,price,rating,image}
//  const product ={name, brand,type,description,price,rating,image}
// console.log(product);
 console.log(brands);
//  fetch("https://assaignment-ten-server-2m95fvaym-md-ebrahim-khal
// ils-projects.vercel.app/products",{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product)
//  }) 
// .then(res => res.json())
// .then(data =>{
//    console.log(data);
//     form.reset()
// })
 fetch("https://assaignment-ten-server-2m95fvaym-md-ebrahim-khalils-projects.vercel.app/brands",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brands)
 }) 
.then(res => res.json())
.then(data =>{
   console.log(data);
    form.reset()
})

}

    return (
        <div>
<div>
    <h1 className="text-center p-11 text-5xl font-semibold"> Add New Product</h1>
    <form onSubmit={handelProduct} className="space-y-4">
    <input type="text" name="name" placeholder="Name" className="input input-bordered input-error w-full  block" />
    <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered input-error w-full  block" />
<input type="text" name="type" placeholder="Type" className="input input-bordered input-error w-full " />
<input type="text" name="description" placeholder="Short description" className="input input-bordered input-error w-full " />
<input type="text" name="price" placeholder="Price" className="input input-bordered input-error w-full " />
<input type="text" name="rating" placeholder="Rating" className="input input-bordered input-error w-full " />
<input type="text" name="image" placeholder="Image" className="input input-bordered input-error w-full " />

<input type="submit" className="items-end" value="Submit" />

    </form>
</div>
        </div>
    );
};

export default AddProduct;