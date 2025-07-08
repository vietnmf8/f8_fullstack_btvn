import {createBrowserRouter} from "react-router";
import App from "../App.jsx";
import Products from "../pages/Products/index.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path:"/Products",
        element: <Products/>
    }
])

export default router