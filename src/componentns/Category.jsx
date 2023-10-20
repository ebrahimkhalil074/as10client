import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {

    const{brand,image}=item||{}
    return (
        <div>
        <Link to={`/products/${brand}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
  </div>
</div>
        </Link>
        </div>
    );
};

export default Category;