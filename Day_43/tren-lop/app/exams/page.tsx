'use client'
import api from '../../plugins/api'
import {useEffect, useState} from "react";
import Link from 'next/link';
import {Button} from "@mui/material";
import { useRouter } from "next/navigation";

export default function () {
/* ==========================================================================================
 * Biến & State
 * ========================================================================================== */

    // Biến exams: Tổng hợp các câu hỏi
    const [exams, setExams] = useState([])

    // Khai báo router
    const router = useRouter()


/* ==========================================================================================
 * Các hàm xử lý
 * ========================================================================================== */

    // Hàm xử lý lấy dữ liệu cho biến exams
    const getExams = async () => {
        try {
            const { data } = await api.get('/exams/')
            setExams(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    // Xử lý khi nhấn vào button
    const onClick = () => {
        console.log('Đã click')
        // router.push('/exams/1')     // PUSH: Đẩy sang trang /exams/1 | Thêm vào mảng history [exams]
        router.replace('/exams/1')     // REPLACE: Đẩy sang trang /exams/1 | Ghi đè

    }

/* ==========================================================================================
 * useEffect: gọi API và theo dõi state
 * ========================================================================================== */

    // Thực hiện get API khi lần đầu mount
    useEffect(() => {
        getExams()
    }, [])

    // Thực hiện get API khi lần đầu mount
    useEffect(() => {
        console.log(exams)
    }, [exams])



/* ==========================================================================================
 * Giao diện
 * ========================================================================================== */
    return (
        <>
            <ul>
                {
                    exams.map((exam) => (
                        <li key={exam.id}>
                            {/* Cách 1 */}
                            {/*<Link href="/exams/1">{exam.title}</Link>*/}

                            {/* Cách 2 */}
                            <button
                                onClick={onClick}
                            >
                                {exam.title}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}