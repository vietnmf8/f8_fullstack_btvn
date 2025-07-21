'use client'
import api from '../../plugins/api'
import {useEffect, useState} from "react";
import List from '@mui/material/List';
import {ListItem, ListItemText} from "@mui/material";

export default function () {
/* ==========================================================================================
 * Biến & State
 * ========================================================================================== */

    // Biến exams: Tổng hợp các câu hỏi
    const [exams, setExams] = useState([])


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
                        <li key={exam.id}>{exam.title}</li>
                    ))
                }
            </ul>
        </>
    )
}