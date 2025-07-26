"use client"

import {useEffect, useState} from "react";
import {setCookie} from "cookies-next";
import api from "@/plugins/api";

setCookie('access', '1224')



export default function Home() {
  const [count, setCount] = useState<number>(0)

    const getExams = async () => {
        try {
            const {data} = await api.get('/exams/')
        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        getExams()
    }, [])
  return (
    <>
      <h2>count: {count}</h2>
    </>
  );
}
