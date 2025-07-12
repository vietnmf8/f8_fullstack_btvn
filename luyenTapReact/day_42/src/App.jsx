import {useNavigate} from "react-router";
import {Button} from "@mui/material";

function App() {

    const navigate = useNavigate();
    return (
        <>
            <Button
                onClick={() => navigate("/contacts")}
            >
                Contacts Page
            </Button>
        </>
    )
}

export default App
