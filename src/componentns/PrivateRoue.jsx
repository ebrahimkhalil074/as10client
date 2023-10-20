import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Pages/AuthProvider";
import { ColorRing } from "react-loader-spinner";






const PrivateRoute = ({children}) => {
    const location =useLocation()
    
    

const {user,loading}=useContext(AuthContext)
console.log(user);
if(loading){
return <div className="flex justify-center items-center h-screen">
    <ColorRing
 visible={true}
 height="180"
 width="180"
 ariaLabel="blocks-loading"
 wrapperStyle={{}}
 wrapperClass="blocks-wrapper"
 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
</div>
}



if(user) {
    return children
}
else{
   return <Navigate state={location.pathname} to="/login"></Navigate>
}

   
};

export default PrivateRoute;