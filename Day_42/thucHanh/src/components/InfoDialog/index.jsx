/* Dialog Thêm mới / Sửa Product */
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAPI, updateAPI} from "../../utils/index.js";
import {filteredProductwithSearchStr, selectProducts} from "../../store/selectors.js";

const InfoDialog = ({open, onClose, product}) => {

    const dispatch = useDispatch()
    const products = useSelector(filteredProductwithSearchStr);

    // Tạo state các trường cho Form
    const [formData, setFormData] = useState({
        name: '', price: '', quantity: '', unit: ''
    })

    // Xử lý khi mới vào component này!
    useEffect(() => {
        // Nếu product tồn tại -> fill vào các trường trong form
        if (product) {
            setFormData({
                ...formData,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                unit: product.unit,
            })
        } else {
            setFormData({name: '', price: '', quantity: '', unit: ''})
        }
    }, [product])

    // Hàm xử lý khi nhập vào ô Input
    const onInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }


    // Hàm xử lý NextId
    const nextId = () => {
        if (products.length === 0) return '1';
        const ids = products.map(product => parseInt(product.id))
        const maxId = Math.max(...ids)
        return maxId + 1
    }

    // Hàm Submit
    const onSubmit = (e) => {
        e.preventDefault() // Ngăn reload lại trang

        // Validate
        if (!formData.name || !formData.price || !formData.quantity || !formData.unit) {
            console.log("Bạn mình ơi còn thông tin chưa điền")
        } else {
            // Ta có Data mới như sau:
            const newData = {
                ...formData,
                id: nextId(),
                price: parseFloat(formData.price),
                quantity: parseFloat(formData.quantity),
                unit: formData.unit,
            }

            // Dispatch action tương ứng
            if (product) {
                dispatch(updateAPI({...newData, id: product.id}));
            } else {
                dispatch(postAPI(newData));
                setFormData({name: '', price: '', quantity: '', unit: ''})
            }

            onClose();
        }
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={'lg'}
        >
            <DialogTitle>
                {
                    product ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"
                }
            </DialogTitle>

            <form onSubmit={onSubmit}>
                <DialogContent>
                    <TextField
                        sx={{marginBottom: "30px"}}
                        fullWidth
                        label={"Tên sản phẩm"}
                        autoFocus={true}
                        autoComplete={'off'}
                        name={"name"}
                        value={formData.name}
                        onChange={onInput}
                    />

                    <TextField
                        type="number"
                        sx={{marginBottom: "30px"}}
                        fullWidth
                        label={"Giá tiền"}
                        autoComplete={'off'}
                        name={"price"}
                        value={formData.price}
                        onChange={onInput}
                    />

                    <TextField
                        type="number"
                        sx={{marginBottom: "30px"}}
                        fullWidth
                        label={"Số lượng"}
                        autoComplete={'off'}
                        name={"quantity"}
                        value={formData.quantity}
                        onChange={onInput}
                    />

                    <TextField
                        fullWidth
                        label={"Đơn vị"}
                        autoComplete={'off'}
                        name={"unit"}
                        value={formData.unit}
                        onChange={onInput}
                    />
                </DialogContent>

                <DialogActions>
                    <Button type="submit">
                        {
                            product ? "Cập nhật" : "Thêm mới"
                        }
                    </Button>

                    <Button type="button" onClick={onClose} color="error" variant={"outlined"}>
                        Huỷ
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default InfoDialog