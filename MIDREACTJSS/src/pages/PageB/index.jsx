import {useNavigate} from "react-router";
import {Button} from "@mui/material";


const PageB = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Đây là Page B</h1>
            <Button onClick={() => navigate('/')}>Nhấn về Home</Button>
        </>
    )
}

export default PageB;