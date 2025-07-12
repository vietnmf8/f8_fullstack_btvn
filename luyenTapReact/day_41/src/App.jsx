import Products from "./components/Products/index.jsx";
import Search from "./components/Search/index.jsx";
import {Box, Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router";

function App() {
    const navigate = useNavigate();

    return (
        <Container style={{padding: "2%"}}>
            <Box>
                <Button onClick={() => navigate('/PageA')}>Nhấn sang trang Page A</Button>
                <Button onClick={() => navigate('/PageB')}>Nhấn sang trang Page B</Button>


            </Box>

            <Typography
                variant="h4"
                color="textSecondary"
                component="h1"
                fontWeight={'bold'}
                sx={{marginBottom: "30px"}}
            >
                Danh sách sản phẩm
            </Typography>

            {/* Search */}
            <Search/>
            {/* Component: Products */}
            <Products/>
        </Container>
    )
}

export default App
