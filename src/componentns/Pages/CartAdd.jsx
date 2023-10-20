

const CartAdd = ({item}) => {
    const {type,description,_id,image
    }=item||{}

const handelDelete =(id)=>{
console.log(id);
fetch(`http://localhost:3000/carts/${id}`,{
  method:"DELETE"
})
.then(res => res.json())
.then(data =>{
  console.log(data);
if(data.deletedCount < 0) {
  alert("delete")
}

})

}

    return (
        <div>
            <div style={{backgroundColor:"#3443"}} className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[500px] h-[250px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-800 text-4xl">{type}</h2>
    <p className="text-2xl  text-blue-400 font-medium">{description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelDelete(_id)} className="btn btn-primary">delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartAdd;