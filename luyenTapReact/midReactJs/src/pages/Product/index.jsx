import {Container, Typography} from "@mui/material";
import ProductList from '../../components/ProductList'

const Product = () => {
    return (
        <Container>
            <Typography
                variant="h4"
                color="textSecondary"
                component="h1"
                align="center"
                gutterBottom
                fontWeight="bold"
            >
                Quản lý sản phẩm
            </Typography>

            {/* ProductList */}
            <ProductList />

        </Container>
    )
}

export default Product;