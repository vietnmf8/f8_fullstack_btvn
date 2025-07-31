'use client'

import {useParams} from "next/navigation";

export default function () {
    const { id } = useParams()


    return (
        <div>
            <h4>Đây là trang Test CHILD!</h4>
        </div>
    )
}