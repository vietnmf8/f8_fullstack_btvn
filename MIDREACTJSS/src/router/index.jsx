import {createBrowserRouter} from "react-router";
import Home from "../pages/Home/index.jsx";
import PageA from "../pages/PageA/index.jsx";
import PageB from "../pages/PageB/index.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/PageA",
        element: <PageA/>
    },
    {
        path:"/PageB",
        element: <PageB/>
    },
])

export default router