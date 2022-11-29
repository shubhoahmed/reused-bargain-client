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
            }
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


        ]
    }

]);
export default router;