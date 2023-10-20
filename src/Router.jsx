import { createBrowserRouter } from "react-router-dom";
import Route from "./Route";
import Home from "./componentns/Pages/Home";
import AddProduct from "./componentns/Pages/AddProduct";

import CategoryData from "./componentns/CategoryData";
import Details from "./componentns/Details";

import MyCart from "./componentns/Pages/MyCart";
import Update from "./componentns/Update";

import Login from "./componentns/Pages/Login";
import Register from "./componentns/Pages/Register";
import PrivateRoute from "./componentns/PrivateRoue";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Route></Route>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
            path:'/addproduct',
            element:<PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
        },
        {
            path:'/brands/:id',
            loader:({params})=> fetch(`https://assaignment-ten-server-jc3bxq511-md-ebrahim-khalils-projects.vercel.app/brands/${params.id}`),
            element:<PrivateRoute>
              <Update></Update>
            </PrivateRoute>
        },
        {
            path:'/mycart',
            element:<PrivateRoute>
              <MyCart></MyCart>
            </PrivateRoute>,
            loader:()=> fetch("https://assaignment-ten-server-jc3bxq511-md-ebrahim-khalils-projects.vercel.app/carts")
        },
        {
          path:'/products/:brand',
          element:
            <CategoryData></CategoryData>
          ,
          loader:()=> fetch("https://assaignment-ten-server-jc3bxq511-md-ebrahim-khalils-projects.vercel.app/brands")
        },
      
        {
          path:"/details/:id",
          element:<PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
          loader:({params})=> fetch(`https://assaignment-ten-server-jc3bxq511-md-ebrahim-khalils-projects.vercel.app/brands/${params.id}`)
        }
      ]
    },
  ]);

export default router;