import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AdvertiseItem from "../../Pages/AdvertiseItem/AdvertiseItem";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import Products from "../../Pages/Products/Products";


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
                element: <Products></Products>
            }
        ]
    },

]);
export default router;