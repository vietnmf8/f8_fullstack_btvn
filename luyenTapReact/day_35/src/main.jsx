import { createRoot } from 'react-dom/client'
import { ToastContainer} from 'react-toastify';
import { router } from './router'
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
    <ToastContainer />
  </>,
)
