import {createBrowserRouter} from "react-router";
import Employees from "../pages/Employees/index.jsx";
import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";

const router = createBrowserRouter([
    {
        name: "Login",
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/employees",
        element: <Employees />,
    },
]);

export default router;