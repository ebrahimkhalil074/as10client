import { Outlet } from "react-router-dom";
import Navbar from "./componentns/Navber";
import Footer from "./componentns/Footer";


const Route = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Route;