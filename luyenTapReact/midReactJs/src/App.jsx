import './App.css'
import {useNavigate} from "react-router";
import {Button} from "@mui/material";

function App() {

    const navigate = useNavigate()

  return (
    <>
        <h1>Xin chào!</h1>
        <Button
            onClick={() => navigate('/products')}
        >
            Product Page
        </Button>
    </>
  )
}

export default App
