import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Grid
} from '@mui/material';
import { AddProduct, UpdateProduct } from '../../store/Product/action.jsx';

const ProductForm = ({ open, onClose, product = null }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        quantity: '',
        unit: ''
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        } else {
            setFormData({
                id: '',
                name: '',
                price: '',
                quantity: '',
                unit: ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateId = () => {
        return 'p' + Date.now().toString().slice(-6);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.price || !formData.quantity || !formData.unit) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const productData = {
            ...formData,
            id: product ? product.id : generateId(), // Giữ ID cũ nếu edit, tạo mới nếu add
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity)
        };

        if (product) {
            dispatch(UpdateProduct(productData));
        } else {
            dispatch(AddProduct(productData));
        }

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                {product ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}
            </DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Tên sản phẩm"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Giá bán (VNĐ)"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Số lượng"
                                name="quantity"
                                type="number"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Đơn vị"
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Hủy</Button>
                    <Button type="submit" variant="contained" color="primary">
                        {product ? 'Cập nhật' : 'Thêm'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ProductForm;