import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from '@mui/material';
import { DeleteProduct } from '../../store/Product/action.jsx';
import { selectFilteredProducts } from '../../store/selectors.js';
import ProductForm from '../ProductForm/index.jsx';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectFilteredProducts);

    const [openForm, setOpenForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(null);

    const handleDelete = (product) => {
        setDeleteProduct(product);
        setOpenDeleteDialog(true);
    };

    const handleConfirmDelete = () => {
        if (deleteProduct) {
            dispatch(DeleteProduct(deleteProduct.id));
            setOpenDeleteDialog(false);
            setDeleteProduct(null);
        }
    };

    const handleCancelDelete = () => {
        setOpenDeleteDialog(false);
        setDeleteProduct(null);
    };

    const handleAdd = () => {
        setEditProduct(null);
        setOpenForm(true);
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
        setEditProduct(null);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN') + ' VNĐ';
    };

    return (
        <div>
            {/* Nút thêm sản phẩm */}
            <div style={{ marginBottom: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAdd}
                >
                    Thêm sản phẩm
                </Button>
            </div>

            {/* Bảng danh sách sản phẩm */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Tên sản phẩm</strong></TableCell>
                            <TableCell><strong>Giá bán</strong></TableCell>
                            <TableCell><strong>Số lượng</strong></TableCell>
                            <TableCell><strong>Đơn vị</strong></TableCell>
                            <TableCell><strong>Hành động</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    <Typography variant="body2" color="textSecondary">
                                        Không có sản phẩm nào
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{formatPrice(product.price)}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>{product.unit}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            onClick={() => handleEdit(product)}
                                            style={{ marginRight: '8px' }}
                                        >
                                            Sửa
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(product)}
                                        >
                                            Xóa
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Form thêm/sửa sản phẩm */}
            <ProductForm
                open={openForm}
                onClose={handleCloseForm}
                product={editProduct}
            />

            {/* Popup xác nhận xóa */}
            <Dialog
                open={openDeleteDialog}
                onClose={handleCancelDelete}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                    Xác nhận xóa sản phẩm
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">
                        Bạn có chắc chắn muốn xóa sản phẩm <strong>"{deleteProduct?.name}"</strong> không?
                        <br />
                        Thao tác này không thể hoàn tác.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProductList;