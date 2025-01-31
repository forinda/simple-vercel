import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/404";

export const router = createBrowserRouter([{
    path:'/',
    element:<Outlet/>,
    children:[{
        path:'/',
        element:<Home/>
    },{
        path:'/about',
        element:<About/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
],


}])