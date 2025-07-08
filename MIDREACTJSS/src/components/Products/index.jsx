/* Component: Products */

import {filteredProductwithSearchStr, selectProducts} from "../../store/selectors.js";
import {getAPI} from "../../utils/index.js";
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import InfoDialog from "../InfoDialog";
import DeleteDialog from "../DeleteDialog/index.jsx";


const Products = () => {

    // Lấy ra products từ API
    const dispatch = useDispatch()
    const products = useSelector(filteredProductwithSearchStr)

    // Gọi dữ liệu từ API ở lần đầu tiên APP được mount
    useEffect(() => {
        dispatch(getAPI())
    }, []);

    // Tạo state mở/đóng InfoDialog
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    // Tạo state product đang được chọn để chỉnh sửa
    const [editProduct, setEditProduct] = useState(null)
    // Tạo sate mở/đóng DeleteDialog
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)
    // Tạo state product đang được chọn để xoá
    const [deleteProduct, setDeleteProduct] = useState(null)


    /* XỬ LÝ CÁC HÀM */
    // Ham xử lý khi nhấn vào nút THÊM SẢN PHẨM
    const onAddNew = () => {
        console.log('Đã nhấn vào nút: THÊM SẢN PHẨM')
        setIsOpenDialog(true)
        setEditProduct(null)
    }

    // Ham xử lý khi nhấn vào nút SỬA
    const onEdit = (product) => {
        console.log(`Đã nhấn vào nút: SỬA -> ${product.name}`)
        setIsOpenDialog(true)
        setEditProduct(product)
    }

    // Ham xử lý khi nhấn vào nút XOÁ
    const onDelete = (product) => {
        console.log(`Đã nhấn vào nút: XOÁ -> ${product.name}`)
        setIsOpenDeleteDialog(true)
        setDeleteProduct(product)
    }

    // Hàm xử lý khi đóng Dialog
    const onClose = () => {
        setIsOpenDialog(false)
        setIsOpenDeleteDialog(false)
    }



    return (
        <div style={{marginTop: '20px'}}>
            <div>
                <Button
                    variant={'outlined'}
                    onClick={onAddNew}
                >
                    Thêm sản phẩm
                </Button>
            </div>

            <TableContainer
                component={Paper}
                sx={{marginTop: 4}}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Id</strong></TableCell>
                            <TableCell><strong>Tên sản phẩm</strong></TableCell>
                            <TableCell><strong>Danh mục</strong></TableCell>
                            <TableCell><strong>Số thứ tự</strong></TableCell>
                            <TableCell><strong>Hành động</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.categoryId}</TableCell>
                                    <TableCell>{product.orderNum}</TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => onEdit(product)}
                                        >
                                            Sửa
                                        </Button>

                                        <Button
                                            variant={"outlined"}
                                            color={'error'}
                                            onClick={() => onDelete(product)}
                                        >
                                            Xoá
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>

                </Table>
            </TableContainer>

            {/* InfoDialog */}
            <InfoDialog open={isOpenDialog} onClose={onClose} product={editProduct}/>

            {/* Delete Dialog */}
            <DeleteDialog open={isOpenDeleteDialog} onClose={onClose} product={deleteProduct}/>
        </div>

    )
}

export default Products;