import {useDispatch, useSelector} from 'react-redux'
import {selectProducts} from "../../store/selectors.js";
import {useEffect, useState} from "react";
import {getAPI} from "../../utils/index.js";
import {TableCell, TableContainer, TableHead, Table, TableRow, Paper, TableBody, Button} from "@mui/material";
import InfoDialog from "../InfoDialog/index.jsx";
import DeleteDialog from "../InfoDialog/index.jsx";

const ProductList = () => {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()



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
    }

    // Hàm xử lý khi đóng Dialog
    const onClose = () => {
        setIsOpenDialog(false)
        setIsOpenDeleteDialog(false)
    }


    return (
        <div>
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

            {/* Dialog Info */}
            <InfoDialog open={isOpenDialog} onClose={onClose} product={editProduct}/>


            {/*DeleteDialog*/}
            <DeleteDialog open={isOpenDeleteDialog} onClose={onClose} product={deleteProduct}/>


        </div>
    )
}

export default ProductList