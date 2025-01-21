import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AllFoods from "../pages/AllFoods";

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
            path: '/gallery',
            element: <h1>Gallery</h1>
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