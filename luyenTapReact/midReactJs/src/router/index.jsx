import {createBrowserRouter} from "react-router";
import App from "../App.jsx";
import Product from "../pages/Product/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/products",
        element: <Product/>
    }
])

export default router;