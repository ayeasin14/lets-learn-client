import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Login/Registration";
import Blog from "../../Pages/Others/Blog/Blog";
import FAQ from "../../Pages/Others/FAQ/FAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://lets-learn-server-delta.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://lets-learn-server-delta.vercel.app/category/${params.id}`)

            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://lets-learn-server-delta.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])