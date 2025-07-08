import {Box, Button, Container, TableContainer, Typography} from "@mui/material";
import ProductList from "../../components/ProductList/index.jsx";
const Products = () => {
    return (
        <Container style={{padding: "2%"}}>
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
            {/*<Search/>*/}


            {/*Component: ProductList*/}
            <ProductList/>
        </Container>
    )
}

export default Products