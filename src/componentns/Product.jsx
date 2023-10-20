import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {name,brand,type,description,price,rating,_id,image
    }=product||{}
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img className="rounded-xl w-full h-[300px]" src={image} alt="Shoes"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{type}</p>
    <p>{brand}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{rating}</p>
    <div className=" w-full flex justify-around">
     <Link to={`/details/${_id}`}> <button className="btn btn-primary">See More</button></Link>
     <Link to={`/brands/${_id}`}> <button className="btn btn-primary">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;