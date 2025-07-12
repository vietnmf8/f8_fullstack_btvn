import React, { useState, useEffect } from "react";
import { Container, Alert, Snackbar } from "@mui/material";
import FCommonTable from "../FCommonTable/FCommonTable.jsx";
import ProductDialog from "../ProductDialog/ProductDialog.jsx";
import api from "../../utils/api.js";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});
    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [notification, setNotification] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    // Tạo map từ categoryId đến tên danh mục
    useEffect(() => {
        const newCategoryMap = {};
        categories.forEach((cat) => {
            newCategoryMap[cat.id] = cat.name;
        });
        setCategoryMap(newCategoryMap);
    }, [categories]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Tải danh mục trước
            const categoriesRes = await api.getCategories();
            setCategories(categoriesRes.data);

            // Sau đó tải sản phẩm
            const productsRes = await api.getProducts();
            setProducts(productsRes.data);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
            showNotification("Lỗi khi tải dữ liệu", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showNotification = (message, severity = "success") => {
        setNotification({
            open: true,
            message,
            severity,
        });
    };

    const handleCloseNotification = () => {
        setNotification({
            ...notification,
            open: false,
        });
    };

    const handleAddProduct = () => {
        setCurrentProduct(null);
        setDialogOpen(true);
    };

    const handleEditProduct = (product) => {
        setCurrentProduct(product);
        setDialogOpen(true);
    };

    const handleDeleteProduct = async (id) => {
        if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

        try {
            // Kiểm tra xem sản phẩm có tồn tại không
            const productExists = products.some((product) => product.id === id);
            if (!productExists) {
                showNotification("Sản phẩm không tồn tại", "error");
                return;
            }

            await api.deleteProduct(id);
            setProducts(products.filter((product) => product.id !== id));
            showNotification("Xóa sản phẩm thành công");
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);

            // Xử lý lỗi cụ thể hơn
            if (error.response && error.response.status === 404) {
                showNotification(
                    "Không tìm thấy sản phẩm trên server",
                    "error"
                );
            } else {
                showNotification("Lỗi khi xóa sản phẩm", "error");
            }
        }
    };

    const handleSaveProduct = async (productData) => {
        try {
            if (currentProduct) {
                // Update existing product
                const response = await api.updateProduct(currentProduct.id, {
                    ...productData,
                    id: currentProduct.id,
                });

                setProducts(
                    products.map((p) =>
                        p.id === currentProduct.id ? response.data : p
                    )
                );
                showNotification("Cập nhật sản phẩm thành công");
            } else {
                // Create new product
                // Get the highest ID to increment
                const maxId =
                    products.length > 0
                        ? Math.max(...products.map((p) => p.id))
                        : 0;

                const response = await api.createProduct({
                    ...productData,
                    id: maxId + 1,
                });

                setProducts([...products, response.data]);
                showNotification("Thêm sản phẩm thành công");
            }
            return true;
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm:", error);
            showNotification("Lỗi khi lưu sản phẩm", "error");
            throw error;
        }
    };

    const columns = [
        { id: "id", label: "ID", minWidth: 50 },
        { id: "name", label: "Tên sản phẩm", minWidth: 150 },
        {
            id: "categoryId",
            label: "Danh mục",
            minWidth: 120,
            format: (value) => categoryMap[value] || "Đang tải...",
        },
        { id: "orderNum", label: "Số thứ tự", minWidth: 100 },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <FCommonTable
                title="Danh sách sản phẩm"
                data={products}
                columns={columns}
                onAdd={handleAddProduct}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
                loading={loading}
            />

            <ProductDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                product={currentProduct}
                onSave={handleSaveProduct}
            />
            <Snackbar
                open={notification.open}
                autoHideDuration={6000}
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity={notification.severity}
                    sx={{ width: "100%" }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ProductList;
