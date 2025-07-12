import { createRoot } from 'react-dom/client'
import { store } from './store/index.js'
import {Provider} from 'react-redux'
import router from './router/index.jsx'
import {RouterProvider} from "react-router";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
