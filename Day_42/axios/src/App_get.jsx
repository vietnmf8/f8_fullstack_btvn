import {useEffect, useState} from 'react'

import './App.css'
import axios from "axios";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get('http://localhost:3000/products')
        setProducts(data)
      }
      catch (e) {
        console.log(e)
      }
    }

    fetchProducts()
  },[])

  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {
          products.map((product,index) => (
              <li key={index}>{product.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
