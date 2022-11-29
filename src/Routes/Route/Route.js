import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AdvertiseItem from "../../Pages/AdvertiseItem/AdvertiseItem";
import Blog from "../../Pages/Blog/Blog";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import MyProduct from "../../Pages/MyProduct/MyProduct";
import Products from "../../Pages/Products/Products";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../Route/AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/advertisement',
                element: <AdvertiseItem></AdvertiseItem>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '*',
                element: <div>
                    <h1 className="text-center text-2xl text-semibold">This routes are not found:: 404 </h1>
                    <img className="w-[400px] mx-auto my-5" src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp" alt="" />
                </div>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',

            },
            {
                path: '/dashboard/add-product',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProduct></MyProduct>
            },


        ]
    }

]);
export default router;