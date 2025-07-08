import App from "../../App.jsx";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";
import Products from "../../components/Products/index.jsx";


const PageA = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>Đây là Page A</h1>
            <Button onClick={() => navigate('/')}>Nhấn về Home</Button>
            <Products/>
        </>
    )
}

export default PageA;