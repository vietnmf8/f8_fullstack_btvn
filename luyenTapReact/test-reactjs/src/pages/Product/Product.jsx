import React from "react";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    Box,
    Typography,
    Container,
} from "@mui/material";
import ProductList from "../../components/ProductList/ProductList.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
});

const Product = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center"
                    >
                        Quản lý sản phẩm
                    </Typography>
                    <ProductList />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Product;
