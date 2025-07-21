"use client"

import {useParams} from "next/navigation";
import Header from './Header'
import Description from './Description'
import QuestionSelection from "./QuestionSelection"
import {Box, Grid} from "@mui/material";


export default function () {

    const {id} = useParams();
    console.log(id); // {id: "1"} = ...exams/1

    return (
        <>
            {/* Đầu trang */}
            <Header/>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {/* Chia làm sao để tổng các cap luôn bằng 12 */}
                <Grid size={{sm: 12, lg: 6}}> {/* Chiem 6/12 phan (1 hàng) */}
                    {/* Mô tả */}
                    <Description/>
                </Grid>

                <Grid size={{sm: 12, lg: 6}}>
                    {/* Câu hỏi và đáp án */}
                    <QuestionSelection/>
                </Grid>


                <Grid size={{sm: 12, lg: 6}}> {/* Giá trị không khai báo VD: md thì sẽ lấy gần nhất phía dưới */}
                    {/* Mô tả */}
                    <Description/>
                </Grid>

                <Grid size={{sm: 12, lg: 6}}>
                    {/* Câu hỏi và đáp án */}
                    <QuestionSelection/>
                </Grid>
            </Grid>





        </>
    )
}