import {createBrowserRouter} from "react-router";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Post from '../pages/Post'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/post",
        element: <Post/>
    }
])