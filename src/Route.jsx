import { Outlet } from "react-router-dom";
import Navbar from "./componentns/Navber";
import Footer from "./componentns/Footer";


const Route = () => {
    return (
        <div className="container mx-auto dark:bg-black">
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Route;