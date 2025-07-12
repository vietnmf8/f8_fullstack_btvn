import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Autocomplete,
    Box,
} from "@mui/material";
import api from "../../utils/api.js";

const ProductDialog = ({ open, onClose, product, onSave }) => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        categoryId: null,
        orderNum: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getCategories();
                setCategories(response.data);
            } catch (error) {
                console.error("Lỗi khi tải danh mục:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || "",
                categoryId: product.categoryId || null,
                orderNum: product.orderNum?.toString() || "",
            });
        } else {
            setFormData({
                name: "",
                categoryId: null,
                orderNum: "",
            });
        }
        setErrors({});
    }, [product, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }
    };

    const handleCategoryChange = (event, newValue) => {
        setFormData({
            ...formData,
            categoryId: newValue ? newValue.id : null,
        });

        if (errors.categoryId) {
            setErrors({
                ...errors,
                categoryId: null,
            });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Tên sản phẩm không được để trống";
        }

        if (!formData.categoryId) {
            newErrors.categoryId = "Vui lòng chọn danh mục";
        }

        if (!formData.orderNum.trim()) {
            newErrors.orderNum = "Số thứ tự không được để trống";
        } else if (isNaN(Number(formData.orderNum))) {
            newErrors.orderNum = "Số thứ tự phải là số";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            const productData = {
                ...formData,
                orderNum: Number(formData.orderNum),
            };

            await onSave(productData);
            onClose();
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm:", error);
        } finally {
            setLoading(false);
        }
    };

    const selectedCategory =
        categories.find((cat) => cat.id === formData.categoryId) || null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                {product ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            </DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Tên sản phẩm"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        disabled={loading}
                    />

                    <Autocomplete
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                margin="normal"
                                label="Danh mục"
                                error={!!errors.categoryId}
                                helperText={errors.categoryId}
                            />
                        )}
                        disabled={loading}
                        fullWidth
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Số thứ tự"
                        name="orderNum"
                        value={formData.orderNum}
                        onChange={handleChange}
                        error={!!errors.orderNum}
                        helperText={errors.orderNum}
                        disabled={loading}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>
                    Hủy
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? "Đang lưu..." : "Lưu"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductDialog;
