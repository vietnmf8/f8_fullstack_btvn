// 'use client'
// import {useEffect, useState} from "react";
import axios from "axios";

interface ProductI {
  id: number;
  title: string;
}


export default async function Home() {

  // const [products, setProducts] = useState<ProductI[]>([]);
  //
  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products`);
  //     setProducts(data);
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // useEffect(() => {
  //   getProducts();
  // }, [])


  /* Server Side */
  const { data } =  await axios.get(`https://fakestoreapi.com/products`);
    console.log(data)
  const products: ProductI[] = data;

  return (
    <>
      <h1>Products List</h1>
      <ul>
        {
          products.map((product) => (
              <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </>
  );
}
