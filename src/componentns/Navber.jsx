import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Pages/AuthProvider";

const Navbar = () => {
  const {user, LogOut}=useContext(AuthContext)
  const [theme,setTheme]=useState("light")

useEffect(()=>{
if(theme =="dark") {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark") 
}
},[theme])
const handelTheme=()=>{
  setTheme(true &&theme=="dark"?"light":"dark")
}
    const navLinks=<div className="flex gap-10">
   <li> <NavLink to="/">Home</NavLink></li>
    
     <li>{user&& <NavLink to="/addproduct">Add Product</NavLink>  }</li>
  
    {
      user&& <li><NavLink to="/mycart">My Cart</NavLink></li>
    }
   <li> <NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink>
    </li>
   {
     <li><Link  onClick={handelTheme}>{theme =="dark"?"light":"dark"}</Link></li>
   }
    </div>
const handelLogOut=()=>{
  LogOut()
 .then(res=>{
 console.log(res,'out');
 })
 .catch(err =>{
   console.log(err);
 })
 
 }
 

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52">
        
{navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Phone<span className="text-red-600 text-4xl">S</span>hop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}

    </ul>
  </div>
  <div className="navbar-end">
    {user?
  <div className="flex justify-center items-center gap-2">
<h1>{user.displayName}</h1>
<img className="w-[50px] h-12 rounded-[50%]" src={user.photoURL} alt="" />
<button className="btn btn-primary text-white" onClick={handelLogOut} >Log Out</button>
  </div>:
    <Link  to='/login' >Login</Link>}
  </div>
</div>
        </div>
    );
};

export default Navbar;