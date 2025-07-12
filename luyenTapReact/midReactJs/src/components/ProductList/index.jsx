import {useEffect, useState} from "react";
import {productsAPI} from "../../plugins/api.js";
import {Alert, Container, Snackbar} from "@mui/material";
import ProductTable from '../Table/index.jsx'
import ProductDialog from "../ProductDialog/index.jsx";


const ProductList = () => {
    /* ==========================================================================================
     * Khai báo biến và state
     * ========================================================================================== */

    // Khai báo biến quản lý tất cả categories
    const [categories, setCategories] = useState([]);

    // Khai báo biến quản lý các categories MAP
    const [categoryMap, setCategoryMap] = useState({});

    // Khai báo biến quản lý tất cả products
    const [products, setProducts] = useState([]);

    // Khai báo biến theo dõi trạng thái loading
    const [loading, setLoading] = useState(false);

    // Khai báo biến hiển thị thông báo lỗi
    const [notification, setNotification] = useState({
        open: false,            // Có quyết định mở thông báo không
        message: "",            // Nội dung lỗi
        severity: "success",    // Loại thông báo
    })

    // Khai báo trạng thái mở / đóng của dialog
    const [dialogOpen, setDialogOpen] = useState(false);

    // Khái báo currentProduct đang được chọn
    const [currentProduct, setCurrentProduct] = useState(null);


    /* ==========================================================================================
     * Xử lý các hàm
     * ========================================================================================== */

    // Lấy dữ liệu cho products -> get API khi được mount
    const fetchData = async () => {
        setLoading(true);
        try {
            // Tải danh mục trước
            const categoriesRes = await productsAPI.getCategories();
            setCategories(categoriesRes.data)

            // Tải sản phẩm
            const productsRes = await productsAPI.getProducts();
            setProducts(productsRes.data);
        } catch (error) {
            console.log('Lỗi khi tải dữ liệu: ', error);
            showNotification('Lỗi khi tải dữ liệu', 'error')
        } finally {
            // Tải xong thì chuyển loading -> false
            setLoading(false);
        }
    }


    // Hàm hiện thông báo
    const showNotification = (message, severity) => {
        setNotification({
            ...notification,
            open: false,
            message: message,
            severity: severity,
        })
    }

    // Hàm xử lý thêm Product
    const onAddProduct = () => {
        console.log('Nhấn vào nút thêm mới')
        setCurrentProduct(null);
        setDialogOpen(true);
    }

    // Hàm xử lý sửa Product
    const onEditProduct = (product) => {
        console.log('Sửa Product: ', product);
        setCurrentProduct(product);
        setDialogOpen(true);
    }

    // Hàm xử lý xoá product
    const onDeleteProduct = async (id) => {
        console.log('Xoá Product: ', id)
        //Nếu người dùng ấn "Cancel", thì thoát luôn khỏi hàm bằng return.
        if (!window.confirm("Bạn có chắc chắn xoá sản phẩm này ko??")) return

        try {
            // Dùng some() để kiểm tra xem có sản phẩm nào trong danh sách products có id trùng khớp không.
            const productExists = products.some(product => product.id === id);
            if (!productExists) {
                showNotification("Sản phẩm không tồn tại", "error")
                return
            }

            await productsAPI.delete(id)
            setProducts(products.filter(product => product.id !== id))
            showNotification("Xoá sản phẩm thành công!")
        } catch (error) {
            console.log("Lỗi khi xoá sản phẩm: ", error);

            // Xử lý lỗi cụ thể hơn
            if (error.response && error.response.data.status === 404) {
                showNotification(
                    "Không tìm thấy sản phẩm nào trên server",
                    "error"
                )
            } else {
                showNotification("Lỗi khi xoá sản phẩm", "error")
            }
        }
    }

    // Hàm xử lý Save product từ Dialog
    const onSaveProduct = async (productData) => {
        try {
            // ở chế độ EDIT
            if (currentProduct) {
                // Update API
                const {data} = await productsAPI.update(currentProduct.id, {
                    ...productData,
                    id: currentProduct.id
                });

                // Thêm data vào products
                setProducts(
                    products.map(product => product.id === currentProduct.id ? data : product)
                );

                // Cập nhật thông báo!
                showNotification("Cập nhật sản phẩm thành công");
            }

            // Ở chế độ thêm mới
            else {
                // Get maxID
                const maxId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0

                const {data} = await productsAPI.create({
                    ...productData,
                    id: String(maxId + 1),
                });

                setProducts([...products, data])
            }
        } catch (e) {
            console.error("Lỗi khi lưu sản phẩm: ", e)
            showNotification("Cập nhật sản phẩm thành công!")
        }
    }


    // Hàm đóng noti
    const onCloseNoti = () => {
        setNotification({
            ...notification,
            open: false,
        })
    }


    /* ==========================================================================================
     * useEffect -> gọi API lần đầu & kiểm tra state
     * ========================================================================================== */

    useEffect(() => {
        fetchData()
    }, []);

    // Kiểm tra mảng categories
    useEffect(() => {
        console.log('1. Categories: ', categories);
    }, [categories]);

    // Kiểm tra mảng products
    useEffect(() => {
        console.log('2. Products: ', products);
    }, [products]);

    // Tạo map từ {categoryId: Tên danh mục,...}
    useEffect(() => {
        const newCategoryMap = {}
        categories.forEach((cat) => {
            newCategoryMap[cat.id] = cat.name
        })
        setCategoryMap(newCategoryMap);
    }, [categories]);

    // Kiểm tra mảng categoryMap
    useEffect(() => {
        console.log('3. CategoryMap: ', categoryMap);
    }, [categoryMap]);

    // Kiểm tra mảng categoryMap
    useEffect(() => {
        console.log('4. Loading: ', loading);
    }, [loading]);


    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */

    // Dữ liệu các cột trong bảng
    const columns = [
        {name: "id", label: "ID"},
        {name: "name", label: "Tên sản phẩm"},
        {
            name: "categoryId",
            label: "Danh mục",
            format: (key) => categoryMap[key] || "Đang tải...",
        },
        {name: "orderNum", label: "Số thứ tự"},
    ]
    return (
        <Container>
            {/* Table */}
            <ProductTable
                title='Danh sách sản phẩm'
                products={products}
                columns={columns}
                loading={loading}
                onAddProduct={onAddProduct}
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
            />

            {/* ProductDialog */}
            <ProductDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                product={currentProduct}
                onSaveProduct={onSaveProduct}
            />

            <Snackbar
                open={notification.open}
                autoHideDuration={6000}
                onClose={onCloseNoti}
                anchorOrigin={{vertical: "top", horizontal: "right"}}
            >
                <Alert
                    severity={notification.severity}
                    onClose={onCloseNoti}
                    sx={{width: "100%"}}
                >
                    {notification.message}
                </Alert>
            </Snackbar>

        </Container>
    )
}

export default ProductList