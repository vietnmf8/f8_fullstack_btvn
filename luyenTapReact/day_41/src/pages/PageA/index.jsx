import App from "../../App.jsx";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";


const PageA = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Đây là Page A</h1>
            <Button onClick={() => navigate('/')}>Nhấn về Home</Button>
        </>
    )
}

export default PageA;