import {Avatar, Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import { Edit, Delete, Phone, Email } from '@mui/icons-material';
import {deleteContact} from "../../utils/index.js";
import {useDispatch} from "react-redux";

const ContactCard = ({contact, setEditingContact, setIsOpenForm}) => {
    const dispatch = useDispatch();
    // Kết hợp firstName + lastName
    const fullName = `${contact.firstName} ${contact.lastName}`


    // Hàm xử lý khi nhấn vào nút SỬA
    const onEdit = (contact) => {
        console.log("Nhấn vào nút SỬA")
        setEditingContact(contact)
        setIsOpenForm(true)
    }

    // Hàm xử lý khi nhấn vào nút XOÁ
    const onYesDelete = (id) => {
        console.log("Nhấn vào nút XOÁ")
        dispatch(deleteContact(id));
    }

    const onDelete = () => {
        if (window.confirm(`Bạn có chắc chắn muốn xóa liên hệ ${fullName}?`)) {
            onYesDelete(contact.id);
        }
    }

    return (
        <Card>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar
                    src={contact.image}
                    alt={fullName}
                    sx={{
                        width: 80,
                        height: 80,
                        margin: '0 auto 16px',
                        bgcolor: 'primary.main'
                    }}
                >
                    {fullName.charAt(0).toUpperCase()}
                </Avatar>

                {/* Tên */}
                <Typography variant="h6" component="h2" gutterBottom>
                    {fullName}
                </Typography>

                {/* Email */}
                <Box>
                    <Email sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }}/>
                    <Typography variant="body2" color="text.secondary">
                        {contact.email}
                    </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                        {contact.phone}
                    </Typography>
                </Box>
            </CardContent>

            {/* Nút Edit và Delete */}
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={() => onEdit(contact)}
                    size="small"
                >
                    Sửa
                </Button>

                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                    onClick={onDelete}
                    size="small"
                >
                    Xóa
                </Button>
            </CardActions>
        </Card>
    )
}

export default ContactCard;