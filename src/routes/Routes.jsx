import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AllFoods from "../pages/AllFoods";
import SingleFood from "../pages/SingleFood";
import Gallery from "../pages/Gallery";
import AddFood from "../pages/AddFood";
import FoodPurchase from "../pages/FoodPurchase";
import PrivateRoute from './PrivateRoute';
import MyOrders from "../pages/MyOrders";
import MyFood from "../pages/MyFoods";
import UpdateFood from "../pages/UpdateFood";

const router = createBrowserRouter([
    {
       path: '/', 
       element: <Main></Main>,
       errorElement: <ErrorPage></ErrorPage>,
       children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/all-foods',
            element: <AllFoods></AllFoods>
        },
        {
            path: '/single-food/:id',
            element: <SingleFood></SingleFood>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        {
            path: '/add-food',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: '/food-purchase/:id',
            element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>
        },
        {
            path: '/my-orders',
            element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
            path: '/my-foods',
            element: <PrivateRoute><MyFood></MyFood></PrivateRoute>
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/> 
        },
       ]
    }
])

export default router