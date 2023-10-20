import { useLoaderData } from "react-router-dom";
import CartAdd from "./CartAdd";


const MyCart = () => {
    const loader =useLoaderData()
    return (
        <div className=" grid grid-cols-1 gap-12">
            {
                loader?.map(( item,i)=><CartAdd key={i} item={item}></CartAdd>)
            }
        </div>
    );
};

export default MyCart;