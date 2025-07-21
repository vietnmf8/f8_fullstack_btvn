"use client"
import {useState} from "react";


/* ==========================================================================================
 * Giao diện
 * ========================================================================================== */

export default function Home() {

    const [count, setCount] = useState<number>(0);

  return (
   <>
        <h2>Count: {count}</h2>
   </>
  );
}
