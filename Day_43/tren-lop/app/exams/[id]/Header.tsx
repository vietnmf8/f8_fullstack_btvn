import {Box, Button} from "@mui/material";
import style from './style.module.sass'

export default function () {
    return (
        <Box className={style.header}>
            <Box>Section 1 - Module 1</Box>
            <Box>30:30</Box>
            <Box>
                <Button variant={'outlined'}>Submit</Button>
            </Box>
        </Box>
    )
}