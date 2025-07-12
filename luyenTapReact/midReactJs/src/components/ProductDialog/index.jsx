import {useEffect, useState} from "react";
import { productsAPI } from "../../plugins/api.js";
import {Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

const ProductDialog = ({product, open, onClose, onSaveProduct}) => {

    /* ==========================================================================================
     * Khai báo biến
     * ========================================================================================== */

    // Biến categories cho riêng form data
    const [categories, setCategories] = useState([]);

    // Biến các trươờng trong form
    const [formData, setFormData] = useState({
        name: '',
        categoryId: null,
        orderNumber: ''
    });

    // Biến trạng thái loading khi đang submit
    const [loading, setLoading] = useState(false);

    // Biến hiển thị lỗi khi nhấn submit -> validate
    const [errors, setErrors] = useState({});


    /* ==========================================================================================
     * useEffect gọi API & kiểm tra State
     * ========================================================================================== */

    // Get categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await productsAPI.getCategories();
                setCategories(data);
            }
            catch (error) {
                console.log('Lỗi tải danh mục: ', error);
            }
        }
        // Gọi hàm
        fetchCategories();
    },[])


    // Quyết định form mở ra là trạng thái edit | thêm mới
    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || "",
                categoryId: product.categoryId || "",
                orderNum: product.orderNum?.toString() || "",
            });
        } else {
            setFormData({
                name: "",
                categoryId: null,
                orderNum: ""
            })
        }

        setErrors({})
    }, [product, open])


    // Theo dõi formData
    useEffect(() => {
        console.log("formData: ", formData );
    }, [formData]);



    /* ==========================================================================================
     * Xử lý logic
     * ========================================================================================== */

    // Xử lý khi nhập -> Trường không phải Autocomplete
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

        // Xoá lỗi khi điền lại vào trường
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    }

    // Xử lý khi nhập -> Trường Autocomplete
    const onCategoryChange = (e, newValue) => {
        // newValue chính là một object trong mảng categories mà người dùng chọn.
        setFormData({
            ...formData,
            categoryId: newValue ? newValue.id : null,
        })

        // Xóa thông báo lỗi categoryId ngay khi người dùng chọn lại danh mục hợp lệ.
        if (errors.categoryId) {
            setErrors({
                ...errors,
                categoryId: null
            })
        }
    }

    //Tìm object danh mục đang được chọn (để truyền vào Autocomplete dưới dạng value).
    // Vì Autocomplete không dùng id, mà yêu cầu toàn bộ object từ options.
    const selectedCategory = categories.find((category) => category.id === formData.categoryId) || null;


    // Validate
    const validate = () => {
        const newErrors = {}

        // Kiểm tra trường tên
        if (!formData.name.trim()) {
            newErrors.name = "Tên sản phẩm không được để trống";
        }

        // Kiểm tra trường autocomplete
        if (!formData.categoryId) {
            newErrors.categoryId = "Vui lòng chọn danh mục";
        }

        // Kiểm tra trường orderNum
        if (!formData.orderNum) {
            newErrors.orderNum = "Số thứ tự không được để trống";
        } else if (isNaN(formData.orderNum)) {
            newErrors.orderNum = "Số thứ tự phải là số";
        }

        setErrors(newErrors);
        // true -> Nếu không có lỗi nào | false -> có lỗi
        return Object.keys(newErrors).length === 0;
    }


    // Submit
    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return

        setLoading(true);
        try {
            const productData = {
                ...formData,
                orderNum: Number(formData.orderNum),
            }

            await onSaveProduct(productData);
            onClose();
        }
        catch (error) {
            console.error("Lỗi khi lưu sản phẩm:", error);
        }
        finally {
            setLoading(false);
        }
    }






    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {product ? "Chỉnh sửa liên hệ" : "Thêm sản phẩm mới"}
            </DialogTitle>

            <DialogContent>
                <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                        sx={{mb: 4}}
                        fullWidth
                        label="Tên sản phẩm"
                        name="name"
                        value={formData.name || ""}
                        error={!!errors.name}
                        helperText={errors.name}
                        disabled={loading}
                        onChange={onChange}
                    />

                    <Autocomplete
                        sx={{mb: 4}}
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        value={selectedCategory}
                        onChange={onCategoryChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
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
                        label="Số thứ tự"
                        name="orderNum"
                        value={formData.orderNum}
                        onChange={onChange}
                        error={!!errors.orderNum}
                        helperText={errors.orderNum}
                        disabled={loading}

                    />
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} variant="contained" disabled={loading}>
                    Huỷ
                </Button>

                <Button
                    onClick={onSubmit}
                    variant="contained"
                    disabled={loading}
                >
                    {loading ? "Đang lưu..." : "Lưu"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProductDialog