import {Button} from "@mui/material";
import {useNavigate} from "react-router";

export default function () {

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/employees');
    }

    return (
        <>
            <h1>Home</h1>
            <Button onClick={onClick}>Go to Employee</Button>
        </>
    )
}
