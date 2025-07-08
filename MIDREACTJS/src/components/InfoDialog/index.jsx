/* Dialog Thêm mới / Sửa Product */
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAPI, updateAPI} from "../../utils/index.js";
import {selectProducts} from "../../store/selectors.js";

const InfoDialog = ({open, onClose, product}) => {

    const dispatch = useDispatch()
    const products = useSelector(selectProducts);

    // Tạo state các trường cho Form
    const [formData, setFormData] = useState({
        name: '', categoryId: '', orderNum: ''
    })

    // Xử lý khi mới vào component này!
    useEffect(() => {
        // Nếu product tồn tại -> fill vào các trường trong form
        if (product) {
            setFormData({
                ...formData,
                name: product.name,
                categoryId: product.categoryId,
                orderNum: product.orderNum,
            })
        } else {
            setFormData({name: '', categoryId: '', orderNum: ''})
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
        if (!formData.name || !formData.categoryId || !formData.orderNum) {
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
                setFormData({name: '', categoryId: '', orderNum: ''})
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
                    {/* Trường tên */}
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


                    {/*<FormControl fullWidth sx={{marginBottom: "30px"}}>*/}
                    {/*    <InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                    {/*    <Select*/}
                    {/*        labelId="demo-simple-select-label"*/}
                    {/*        id="demo-simple-select"*/}
                    {/*        value={formData.categoryId}*/}
                    {/*        label="Age"*/}
                    {/*        onChange={onInput}*/}
                    {/*    >*/}
                    {/*        <MenuItem value={1}>Clothes</MenuItem>*/}
                    {/*        <MenuItem value={2}>Phone</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}

                    <TextField

                        type="number"
                        sx={{marginBottom: "30px"}}
                        fullWidth
                        label={"Số lượng"}
                        autoComplete={'off'}
                        name={"categoryId"}
                        value={formData.categoryId}
                        onChange={onInput}
                    />


                    {/* Số thứ tự */}
                    <TextField
                        type="number"
                        sx={{marginBottom: "30px"}}
                        fullWidth
                        label={"Số lượng"}
                        autoComplete={'off'}
                        name={"orderNum"}
                        value={formData.orderNum}
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