import {Button} from "@mui/material";
import {useNavigate} from "react-router";

function App() {
    const navigate = useNavigate();
  return (
    <>
        <h1>Đây là trang HOME</h1>
        <Button onClick={() => navigate('/Products')}>Nhấn vào đây sang Products Page</Button>
    </>
  )
}

export default App
