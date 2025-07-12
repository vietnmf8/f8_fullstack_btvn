import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {use, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createContact, updateContact} from "../../utils/index.js";

const FormData = ({isOpenContactForm, setIsOpenContactForm, contact, setEditingContact, loading}) => {

    /* ==========================================================================================
     * Khoi tạo biến & state
     * ========================================================================================== */

    // State cho form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        image: ""
    })

    // State cho validate form errors
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();


    /* ==========================================================================================
     * useEffect cập nhật formData khi contact thay đổi ( new/edit )
     * ========================================================================================== */

    useEffect(() => {
        if(contact) {
            setFormData({
                ...formData,
                firstName: contact.firstName || '',
                lastName: contact.lastName || '',
                email: contact.email || '',
                phone: contact.phone || '',
                image: contact.image || ''
            })
        } else {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                image: ""
            })
        }

        // Không có lỗi gì!!
        setErrors({})
    }, [contact,isOpenContactForm]);



    /* ==========================================================================================
     * Xử lý các haành động
     * ========================================================================================== */

    // Xu lý khi nhấn vào nút Huỷ
    const onClose = () => {
        if (!loading) {
            setIsOpenContactForm(false)
        }
    }

    // Xử lý khi nhập vào các trường
    const onInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);

        setFormData({
            ...formData,
            [name]: value
        })
    }


    // Xử lý validate
    const onValidate = () => {
        const newErrors = {}

        // Trường Tên
        if (!formData.firstName.trim()) {
            newErrors.firstName = "Tên không được để trống";
        }

        // Trường Họ
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Họ không được để trống";
        }

        // Trường Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        // Trường Phone
        if (!formData.phone.trim()) {
            newErrors.phone = "Số điện thoại không được để trống"
        }

        setErrors(newErrors);

        // Object.keys -> trả về mảng
        // Trả về true nếu không có lỗi nào, hoặc false nếu có ít nhất 1 lỗi
        return Object.keys(newErrors).length === 0;

    }


    // Xử lý khi Submit
    const onSubmit = async (e) => {
        e.preventDefault();

        if (onValidate()) {
            if (contact) {
                await dispatch(updateContact({id: contact.id, contactData: formData}));
                setEditingContact(null)
            } else {
                await dispatch(createContact(formData));
            }
            onClose()
        }
    }


    
    
    
    
    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Dialog
            open={isOpenContactForm}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {contact ? "Sửa liên hệ" : "Thêm liên hệ mới"}
            </DialogTitle>

            <form onSubmit={onSubmit}>
                <DialogContent>
                    <Box>
                        {/* First Name */}
                        <TextField
                            sx={{marginBottom: 4}}
                            name="firstName"
                            label="Tên"
                            fullWidth
                            required
                            onChange={onInputChange}
                            value={formData.firstName}
                            error={!!errors.firstName} //!! ép kiểu về bool
                            helperText={errors.firstName}
                        />

                        {/* Last Name */}
                        <TextField
                            sx={{marginBottom: 4}}
                            name="lastName"
                            label="Họ"
                            fullWidth
                            required
                            onChange={onInputChange}
                            value={formData.lastName}
                            error={!!errors.lastName} //!! ép kiểu về bool
                            helperText={errors.lastName}
                        />

                        {/* Email */}
                        <TextField
                            sx={{marginBottom: 4}}
                            name="email"
                            label="Email"
                            fullWidth
                            required
                            onChange={onInputChange}
                            value={formData.email}
                            error={!!errors.email} //!! ép kiểu về bool
                            helperText={errors.email}
                        />

                        {/* Phone */}
                        <TextField
                            sx={{marginBottom: 4}}
                            name="phone"
                            label="Phone"
                            fullWidth
                            required
                            onChange={onInputChange}
                            value={formData.phone}
                            error={!!errors.phone} //!! ép kiểu về bool
                            helperText={errors.phone}
                        />

                        {/* Image URL */}
                        <TextField
                            name="image"
                            label="Image"
                            fullWidth
                            required
                            onChange={onInputChange}
                            value={formData.image}
                            error={!!errors.image} //!! ép kiểu về bool
                            helperText="Có thể để trống để sử dụng avatar mặc định"
                        />
                    </Box>
                </DialogContent>


                <DialogActions>
                    <Button variant="contained" onClick={onClose}>
                        Huỷ
                    </Button>

                    <Button variant="outlined" onClick={onSubmit} color="success" disabled={loading}>
                        {loading ? "Đang lưu..." : (contact ? "Cập nhật" : "Thêm moi")}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default FormData