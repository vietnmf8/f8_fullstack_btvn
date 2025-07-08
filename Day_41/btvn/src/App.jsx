import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductList from './components/ProductList/index.jsx';
import Search from './components/Search/index.jsx';
import './App.css';

// Component chính của ứng dụng
function App() {
    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            {/* Header */}
            <Box marginBottom={3}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Quản lý sản phẩm
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    CRUD sản phẩm với Redux
                </Typography>
            </Box>

            {/* Tìm kiếm */}
            <Search />

            {/* Danh sách sản phẩm */}
            <ProductList />
        </Container>
    );
}

export default App;