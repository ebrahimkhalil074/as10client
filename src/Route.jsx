import { Outlet } from "react-router-dom";
import Navbar from "./componentns/Navber";


const Route = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Route;