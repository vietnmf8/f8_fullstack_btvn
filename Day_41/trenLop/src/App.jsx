import { useState } from 'react'
import './App.css'
import {store} from "./store/index.js";
import {Increase} from "./store/Count/action.jsx";
import {AddProduct} from "./store/Product/action.jsx";
import {useDispatch, useSelector} from "react-redux";
import {v7} from "uuid";
import ProductList from "./components/ProductList/index.jsx";
import Search from "./components/Search/index.jsx";


function App() {

    const onAddNew = () => {
        const id = v7()
        dispatch(AddProduct({id: id, name: `Product 1: ${id}`}))
    }


    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

  return (
    <>
        <h1>Count: {count}</h1>

        <button
            onClick={() => dispatch(Increase())}
        >Tăng
        </button>

        <button onClick={onAddNew}>
            Add New Product
        </button>

        <Search/>
        <ProductList/>
    </>
  )
}

export default App
