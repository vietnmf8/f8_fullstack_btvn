import {createBrowserRouter} from "react-router";
import App from "../App.jsx";
import Contacts from "../pages/Contacts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    }
]);

export default router;