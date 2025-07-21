"use client"

import {useParams} from "next/navigation";

export default function () {

    const params = useParams();
    console.log(params); // {name: "a", id: 1} = ...exams/a/1

    return (
        <>
            <h1>Exam Detail NAME / ID</h1>
        </>
    )
}