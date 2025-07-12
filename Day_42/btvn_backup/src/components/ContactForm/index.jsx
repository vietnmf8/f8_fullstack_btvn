import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {createContact, updateContact} from "../../utils/index.js";
import {useDispatch} from "react-redux";

const ContactForm = ({open, onClose, contact, loading, setEditingContact, setIsOpenForm}) => {

    const dispatch = useDispatch();
    // State cho form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        image: ''
    });

    // State cho validation errors
    const [errors, setErrors] = useState({});


    // Cập nhật form data khi contact thay đổi (để edit)
    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName || '',
                lastName: contact.lastName || '',
                email: contact.email || '',
                phone: contact.phone || '',
                image: contact.image || ''
            });
        } else {
            // Reset form cho trường hợp thêm mới
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                image: ''
            });
        }
        setErrors({});
    }, [contact, open]);


    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Tên không được để trống';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Họ không được để trống';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Số điện thoại không được để trống';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(validateForm())
            if(validateForm()) {
                if (contact) {
                    // Cập nhật contact
                    await dispatch(updateContact({ id: contact.id, contactData: formData }));
                    setEditingContact(null);
                    setIsOpenForm(false);
                } else {
                    // Tạo mới contact
                    await dispatch(createContact(formData));
                    setIsOpenForm(false);
                }
            }
        } catch (error) {
            console.error('Lỗi khi submit form:', error);
        }
    };

    // Xử lý đóng dialog
    const handleClose = () => {
        if (!loading) {
            onClose();
        }
    };


    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Xóa error khi user bắt đầu nhập
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    }


    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                {contact ? 'Sửa Liên Hệ' : 'Thêm Liên Hệ Mới'}
            </DialogTitle>

            <form onSubmit={onSubmit}>
                <DialogContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        {/* First Name */}
                        <TextField
                            name="firstName"
                            label="Tên"
                            value={formData.firstName}
                            onChange={onChangeInput}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            fullWidth
                            required
                        />

                        {/* Last Name */}
                        <TextField
                            name="lastName"
                            label="Họ"
                            value={formData.lastName}
                            onChange={onChangeInput}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            fullWidth
                            required
                        />

                        {/* Email */}
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={onChangeInput}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            required
                        />

                        {/* Phone */}
                        <TextField
                            name="phone"
                            label="Số điện thoại"
                            value={formData.phone}
                            onChange={onChangeInput}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            fullWidth
                            required
                        />

                        {/* Image URL */}
                        <TextField
                            name="image"
                            label="Avatar URL (Base64 hoặc URL)"
                            value={formData.image}
                            onChange={onChangeInput}
                            fullWidth
                            placeholder="data:image/png;base64,..."
                            helperText="Chuyển ảnh sang base64"
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        disabled={loading}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? 'Đang lưu...' : (contact ? 'Cập nhật' : 'Thêm mới')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default ContactForm