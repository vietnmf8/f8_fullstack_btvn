/* Dialog Thêm mới / Sửa Product */
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAPI, updateAPI} from "../../utils/index.js";
import {filteredProductwithSearchStr, selectProducts} from "../../store/selectors.js";
import {getCategoriesAPI} from "../../utils/index.js";
import api from "../../plugin/api.js";

const InfoDialog = ({open, onClose, product}) => {

    const dispatch = useDispatch()
    const products = useSelector(filteredProductwithSearchStr);

    const [categories, setCategories] = useState([]);
    const getData = async () => {
        const { data } = await api.get("categories");
        console.log(data);
        setCategories(data);
        return data;
    };

    const handleChange = (event, newValue) => {
        setFormData({
            ...formData,
            // Nếu newValue tồn tại, lấy id của nó, nếu không, đặt là rỗng
            categoryId: newValue ? newValue.id : ''
        });
    };





    useEffect(() => {
        getData();
    }, []);
    console.log(categories);

    // Tạo state các trường cho Form
    const [formData, setFormData] = useState({
        name: '', categoryId: '', orderNum: ''
    })

    // Xử lý khi mới vào component này!
    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                categoryId: product.categoryId || '',
                orderNum: product.orderNum || ''
            });
        } else {
            setFormData({ name: '', categoryId: '', orderNum: '' });
        }
    }, [product]);


    useEffect(() => {
        console.log("Form Data: ", formData)
    });

    // Hàm xử lý khi nhập vào ô Input
    const onInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }



    // Hàm xử lý NextId
    // Hàm xử lý NextId an toàn hơn
    const nextId = () => {
        // Lọc ra những sản phẩm hợp lệ (không phải null/undefined) trước khi map
        const validProducts = products.filter(p => p && p.id);

        // Nếu không có sản phẩm nào, ID đầu tiên là SỐ 1
        if (validProducts.length === 0) return 1;

        const ids = validProducts.map(product => parseInt(product.id));
        const maxId = Math.max(...ids);

        // Trả về ID lớn nhất + 1 (luôn là một số)
        return maxId + 1;
    }

    // Hàm Submit
    // const onSubmit = (e) => {
    //     e.preventDefault() // Ngăn reload lại trang
    //
    //     console.log(formData)
    //
    //     // Validate
    //     if (!formData.name || !formData.categoryId || !formData.orderNum) {
    //         console.log("Bạn mình ơi còn thông tin chưa điền")
    //     } else {
    //         // Ta có Data mới như sau:
    //         const newData = {
    //             ...formData,
    //             id: nextId(),
    //             name: formData.name,
    //             categoryId: parseFloat(formData.categoryId),
    //             orderNum: parseFloat(formData.orderNum),
    //         }
    //
    //         console.log(newData)
    //
    //         // Dispatch action tương ứng
    //         if (product) {
    //             dispatch(updateAPI({...newData, id: product.id}));
    //         } else {
    //             dispatch(postAPI(newData));
    //             setFormData({name: '', categoryId: '', orderNum: ''})
    //         }
    //
    //         onClose();
    //     }
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.categoryId || !formData.orderNum) {
            console.log("Bạn mình ơi còn thông tin chưa điền");
            return; // Dừng hàm nếu form chưa hợp lệ
        }

        // Luồng CẬP NHẬT: Dùng ID có sẵn, KHÔNG gọi nextId()
        if (product) {
            const updatedData = {
                ...formData,
                id: product.id, // Sử dụng ID của sản phẩm đang sửa
                categoryId: Number(formData.categoryId),
                orderNum: Number(formData.orderNum),
            };
            dispatch(updateAPI(updatedData));
        }
        // Luồng THÊM MỚI: Chỉ gọi nextId() tại đây
        else {
            const newData = {
                ...formData,
                id: nextId(), // Chỉ gọi khi thêm mới
                categoryId: Number(formData.categoryId),
                orderNum: Number(formData.orderNum),
            };
            dispatch(postAPI(newData));
            setFormData({ name: '', categoryId: '', orderNum: '' });
        }

        onClose();
    };



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


                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={categories}
                        getOptionLabel={(option) => option?.name || ''}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        sx={{ marginBottom: "30px" }}
                        renderInput={(params) => <TextField {...params} label="Danh mục" />}
                        onChange={handleChange}
                        value={categories.find(cat => cat.id == formData.categoryId) || null}
                    />

                    {/*<TextField*/}

                    {/*    type="number"*/}
                    {/*    sx={{marginBottom: "30px"}}*/}
                    {/*    fullWidth*/}
                    {/*    label={"Số lượng"}*/}
                    {/*    autoComplete={'off'}*/}
                    {/*    name={"categoryId"}*/}
                    {/*    value={formData.categoryId}*/}
                    {/*    onChange={onInput}*/}
                    {/*/>*/}


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