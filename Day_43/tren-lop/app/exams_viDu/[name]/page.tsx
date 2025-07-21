"use client"

import {useParams} from "next/navigation";

export default function () {

    const params = useParams();
    console.log(params); // {name: "a"} = ...exams/a

    return (
        <>
            <h1>Exam Detail NAME</h1>
        </>
    )
}